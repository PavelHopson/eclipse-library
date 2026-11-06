import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import pathModule from 'node:path';
import { Pool } from 'pg';
import { clearSessionCookie, createSessionToken, hashPassword, hashSessionToken, normalizeEmail, parseCookie, sessionCookie, verifyPassword } from './auth.mjs';
import { json, readJson, requestPath, setCors } from './http.mjs';

const port = Number(process.env.PORT || 8787);
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://library.eclipse-forge.ru';
const databaseUrl = process.env.DATABASE_URL;
const editorEmail = normalizeEmail(process.env.EDITOR_EMAIL);
const editorPassword = process.env.EDITOR_PASSWORD;
const imageDir = process.env.IMAGE_DIR || '/var/lib/eclipse-library-editor/images';
if (!databaseUrl || !editorEmail || !editorPassword) throw new Error('DATABASE_URL, EDITOR_EMAIL and EDITOR_PASSWORD are required');

const pool = new Pool({ connectionString: databaseUrl, max: 5, idleTimeoutMillis: 30_000, ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: true } : undefined });
const subscribers = new Set();
const sessions = new Map();
const rate = new Map();

async function bootstrap() {
  await fs.mkdir(imageDir, { recursive: true });
  const client = await pool.connect();
  try {
    await client.query('begin');
    const { salt, hash } = hashPassword(editorPassword);
    await client.query(`insert into editor_accounts (id, email, password_salt, password_hash) values ($1, $2, $3, $4)
      on conflict (email) do update set password_salt = excluded.password_salt, password_hash = excluded.password_hash`, [crypto.randomUUID(), editorEmail, salt, hash]);
    await client.query('commit');
  } catch (error) { await client.query('rollback'); throw error; } finally { client.release(); }
}

function limited(key, max = 10, windowMs = 60_000) {
  const now = Date.now(); const item = rate.get(key);
  if (!item || now >= item.reset) { rate.set(key, { count: 1, reset: now + windowMs }); return true; }
  item.count += 1; return item.count <= max;
}

async function accountFromRequest(req) {
  const token = parseCookie(req.headers.cookie).library_editor_session;
  if (!token) return null;
  const tokenHash = hashSessionToken(token); const cached = sessions.get(tokenHash);
  if (cached && cached.expiresAt > Date.now()) return cached.account;
  const { rows } = await pool.query(`select a.id, a.email, a.role, s.expires_at from editor_sessions s join editor_accounts a on a.id = s.account_id where s.token_hash = $1 and s.expires_at > now()`, [tokenHash]);
  if (!rows[0]) return null;
  const account = { id: rows[0].id, email: rows[0].email, role: rows[0].role };
  sessions.set(tokenHash, { account, expiresAt: new Date(rows[0].expires_at).getTime() }); return account;
}

async function requireEditor(req, res) {
  const account = await accountFromRequest(req);
  if (!account || account.role !== 'editor') { json(res, 401, { error: 'editor_auth_required' }); return null; }
  return account;
}

function emit(event, payload) {
  const data = `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const res of subscribers) res.write(data);
}

async function handle(req, res) {
  setCors(res, req.headers.origin, allowedOrigin);
  if (req.method === 'OPTIONS') { res.writeHead(204, { 'access-control-allow-methods': 'GET,POST,PATCH,DELETE,OPTIONS', 'access-control-allow-headers': 'content-type', 'access-control-max-age': '600' }); return res.end(); }
  const path = requestPath(req);
  if (path === '/healthz' && req.method === 'GET') return json(res, 200, { ok: true });
  if (path === '/api/public/image-examples' && req.method === 'GET') {
    const { rows } = await pool.query('select id,title,project,description,prompt,format,image_path,updated_at from image_prompt_examples where status = $1 order by updated_at desc', ['published']);
    return json(res, 200, { schemaVersion: 1, examples: rows.map((row) => ({ ...row, check: row.description, imageUrl: row.image_path ? `/editor-api/api/public/image-examples/${encodeURIComponent(row.id)}/image` : null })) });
  }
  const publicImageMatch = path.match(/^\/api\/public\/image-examples\/([^/]+)\/image$/);
  if (publicImageMatch && req.method === 'GET') {
    const { rows } = await pool.query('select image_path,image_mime from image_prompt_examples where id = $1 and status = $2', [decodeURIComponent(publicImageMatch[1]), 'published']);
    if (!rows[0]?.image_path) return json(res, 404, { error: 'image_not_found' });
    try { const body = await fs.readFile(rows[0].image_path); res.writeHead(200, { 'content-type': rows[0].image_mime, 'cache-control': 'public, max-age=300' }); return res.end(body); } catch { return json(res, 404, { error: 'image_not_found' }); }
  }
  if (path === '/api/editor/login' && req.method === 'POST') {
    if (!limited(`login:${req.socket.remoteAddress}`, 8)) return json(res, 429, { error: 'rate_limited' });
    const body = await readJson(req); const email = normalizeEmail(body.email);
    const { rows } = await pool.query('select id, email, role, password_salt, password_hash from editor_accounts where email = $1', [email]);
    if (!rows[0] || !verifyPassword(body.password, rows[0].password_salt, rows[0].password_hash)) return json(res, 401, { error: 'invalid_credentials' });
    const token = createSessionToken(); const tokenHash = hashSessionToken(token); const expiresAt = new Date(Date.now() + 7 * 86400_000);
    await pool.query('insert into editor_sessions (id, account_id, token_hash, expires_at) values ($1,$2,$3,$4)', [crypto.randomUUID(), rows[0].id, tokenHash, expiresAt]);
    const account = { id: rows[0].id, email: rows[0].email, role: rows[0].role }; sessions.set(tokenHash, { account, expiresAt: expiresAt.getTime() });
    return json(res, 200, { account }, { 'set-cookie': sessionCookie(token, 7 * 86400) });
  }
  if (path === '/api/editor/logout' && req.method === 'POST') {
    const token = parseCookie(req.headers.cookie).library_editor_session;
    if (token) { const tokenHash = hashSessionToken(token); await pool.query('delete from editor_sessions where token_hash = $1', [tokenHash]); sessions.delete(tokenHash); }
    return json(res, 200, { ok: true }, { 'set-cookie': clearSessionCookie() });
  }
  if (path === '/api/editor/me' && req.method === 'GET') { const account = await accountFromRequest(req); return json(res, account ? 200 : 401, account ? { account } : { error: 'editor_auth_required' }); }
  if (path === '/api/editor/events' && req.method === 'GET') {
    if (!await requireEditor(req, res)) return;
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' }); res.write(': connected\n\n'); subscribers.add(res); req.on('close', () => subscribers.delete(res)); return;
  }
  if (!path.startsWith('/api/editor/prompts')) return json(res, 404, { error: 'not_found' });
  const account = await requireEditor(req, res); if (!account) return;
  if (path === '/api/editor/prompts' && req.method === 'GET') { const { rows } = await pool.query('select id,title,project,description,prompt,format,image_path,image_mime,status,updated_at from image_prompt_examples order by updated_at desc'); return json(res, 200, { examples: rows.map((row) => ({ ...row, imageUrl: row.image_path ? `/editor-api/api/public/image-examples/${encodeURIComponent(row.id)}/image` : null })) }); }
  if (path === '/api/editor/prompts' && req.method === 'POST') {
    const body = await readJson(req); const required = ['id','title','project','description','prompt','format'];
    if (required.some((key) => typeof body[key] !== 'string' || !body[key].trim()) || !['draft','published'].includes(body.status || 'draft')) return json(res, 400, { error: 'invalid_prompt' });
    const { rows } = await pool.query(`insert into image_prompt_examples (id,title,project,description,prompt,format,status,updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8) returning id,title,project,description,prompt,format,status,updated_at`, [body.id.trim(), body.title.trim(), body.project.trim(), body.description.trim(), body.prompt.trim(), body.format.trim(), body.status || 'draft', account.id]);
    emit('prompt.changed', rows[0]); return json(res, 201, { example: rows[0] });
  }
  const id = path.split('/').filter(Boolean).at(-1);
  if (id && path.endsWith('/image') && req.method === 'POST') {
    const promptId = path.split('/').filter(Boolean).at(-2); const body = await readJson(req, 8 * 1024 * 1024);
    const match = String(body.dataUrl || '').match(/^data:(image\/(?:png|jpeg|webp|gif));base64,([A-Za-z0-9+/=]+)$/);
    if (!match) return json(res, 400, { error: 'invalid_image' });
    const buffer = Buffer.from(match[2], 'base64'); if (!buffer.length || buffer.length > 6 * 1024 * 1024) return json(res, 413, { error: 'image_too_large' });
    const safeId = promptId.replace(/[^a-zA-Z0-9_-]/g, '_'); const ext = match[1].split('/')[1].replace('jpeg', 'jpg'); const filename = `${safeId}.${ext}`; const target = pathModule.join(imageDir, filename);
    await fs.writeFile(target, buffer, { flag: 'w' });
    const { rows } = await pool.query('update image_prompt_examples set image_path = $1, image_mime = $2, updated_at = now(), updated_by = $3 where id = $4 returning id,title,project,description,prompt,format,status,updated_at', [target, match[1], account.id, promptId]);
    if (!rows[0]) return json(res, 404, { error: 'prompt_not_found' }); emit('prompt.changed', rows[0]); return json(res, 200, { ok: true, imageUrl: `/editor-api/api/public/image-examples/${encodeURIComponent(promptId)}/image` });
  }
  if (id && req.method === 'PATCH') {
    const body = await readJson(req); const fields = ['title','project','description','prompt','format','status']; const values = []; const sets = [];
    for (const field of fields) if (body[field] !== undefined) { if (field === 'status' && !['draft','published'].includes(body[field])) return json(res, 400, { error: 'invalid_status' }); if (typeof body[field] !== 'string' || !body[field].trim()) return json(res, 400, { error: 'invalid_prompt' }); values.push(body[field].trim()); sets.push(`${field} = $${values.length}`); }
    if (!sets.length) return json(res, 400, { error: 'no_changes' }); values.push(account.id, id);
    const { rows } = await pool.query(`update image_prompt_examples set ${sets.join(', ')}, updated_by = $${values.length - 1}, updated_at = now() where id = $${values.length} returning id,title,project,description,prompt,format,status,updated_at`, values);
    if (!rows[0]) return json(res, 404, { error: 'prompt_not_found' }); emit('prompt.changed', rows[0]); return json(res, 200, { example: rows[0] });
  }
  if (id && req.method === 'DELETE') { const { rowCount } = await pool.query('delete from image_prompt_examples where id = $1', [id]); if (!rowCount) return json(res, 404, { error: 'prompt_not_found' }); emit('prompt.deleted', { id }); return json(res, 200, { ok: true }); }
  return json(res, 405, { error: 'method_not_allowed' });
}

const server = http.createServer((req, res) => handle(req, res).catch((error) => { console.error(error); if (!res.headersSent) json(res, error.statusCode || 500, { error: 'internal_error' }); else res.end(); }));
await bootstrap();
server.listen(port, '127.0.0.1', () => console.log(`editor-api listening on 127.0.0.1:${port}`));
process.on('SIGTERM', async () => { server.close(); await pool.end(); process.exit(0); });
