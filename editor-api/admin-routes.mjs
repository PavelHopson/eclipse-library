import crypto from 'node:crypto';
import {hashPassword,normalizeEmail} from './auth.mjs';
import {json,readJson} from './http.mjs';
const editable=['title','project','description','prompt','negative_prompt','settings','source_url','rights_note','format','style_code'];
export function createAdminRoutes({pool,accountFromRequest,emit}) {
 return async (req,res,path) => {
  if(!path.startsWith('/api/editor/admin/')) return false;
  const reply=(status,body)=>{json(res,status,body);return true;};
  const account=await accountFromRequest(req);
  if(!account)return reply(401,{error:'editor_auth_required'});
  const owner=account.role==='owner', writer=owner||account.role==='editor';
  if(path==='/api/editor/admin/overview'&&req.method==='GET') {
   const {rows}=await pool.query('select status,count(*)::int as count from image_prompt_examples group by status');
   const recent=await pool.query('select id,title,status,updated_at from image_prompt_examples order by updated_at desc');
   return reply(200,{account,counts:Object.fromEntries(rows.map(r=>[r.status,r.count])),recent:recent.rows,permissions:{manageAccounts:owner,edit:writer},projects:[{id:'library',name:'Eclipse Library',url:'/editor.html',managed:true},{id:'chat',name:'Eclipse Chat',url:'https://app.star-crm.ru/eclipse-chat/',managed:false},{id:'dnd',name:'Eclipse DnD Forge',url:'https://dnd.eclipse-forge.ru/',managed:false},{id:'media',name:'Eclipse Media',url:'https://media.eclipse-forge.ru/',managed:false}]});
  }
  if(path==='/api/editor/admin/accounts'&&req.method==='GET') {
   if(!owner)return reply(403,{error:'permission_denied'});
   const {rows}=await pool.query('select id,email,role,created_at from editor_accounts order by created_at');
   return reply(200,{accounts:rows});
  }
  if(path==='/api/editor/admin/accounts'&&req.method==='POST') {
   if(!owner)return reply(403,{error:'permission_denied'});
   const body=await readJson(req),email=normalizeEmail(body.email);
   if(!email||email.length>254||!email.includes('@')||!['editor','viewer'].includes(body.role)||typeof body.password!=='string'||body.password.length<16||body.password.length>128)return reply(400,{error:'invalid_account'});
   const {salt,hash}=hashPassword(body.password);
   const result=await pool.query('insert into editor_accounts(id,email,password_salt,password_hash,role) values($1,$2,$3,$4,$5) on conflict(email) do nothing returning id,email,role',[crypto.randomUUID(),email,salt,hash,body.role]);
   return result.rows.length?reply(201,{account:result.rows[0]}):reply(409,{error:'account_exists'});
  }
  const target=path.match(/^\/api\/editor\/admin\/accounts\/([a-f0-9-]{36})$/);
  if(target&&req.method==='PATCH') {
   if(!owner)return reply(403,{error:'permission_denied'});
   const body=await readJson(req);
   if(!['editor','viewer','disabled'].includes(body.role))return reply(400,{error:'invalid_role'});
   // The configured owner cannot be changed through the web UI.
   const result=await pool.query("with changed as (update editor_accounts set role=$1 where id=$2 and role<>'owner' and id<>$3 returning id,email,role), revoked as (delete from editor_sessions s using changed c where s.account_id=c.id returning s.id) select id,email,role from changed",[body.role,target[1],account.id]);
   if(!result.rows.length)return reply(409,{error:'protected_account'});
   return reply(200,{account:result.rows[0]});
  }
  const history=path.match(/^\/api\/editor\/admin\/history\/([^/]+)$/);
  if(history&&req.method==='GET') {
   const {rows}=await pool.query('select h.id,h.saved_at,a.email as author,h.snapshot from editor_prompt_history h join editor_accounts a on a.id=h.actor_id where h.prompt_id=$1 order by h.id desc limit 50',[decodeURIComponent(history[1])]);
   return reply(200,{revisions:rows});
  }
  const restore=path.match(/^\/api\/editor\/admin\/history\/([^/]+)\/(\d+)\/restore$/);
  if(restore&&req.method==='POST') {
   if(!writer)return reply(403,{error:'permission_denied'});
   const body=await readJson(req);
   if(typeof body.expectedUpdatedAt!=='string'||!Number.isFinite(Date.parse(body.expectedUpdatedAt)))return reply(400,{error:'invalid_version'});
   const id=decodeURIComponent(restore[1]);
   const old=await pool.query('select snapshot from editor_prompt_history where id=$1 and prompt_id=$2',[restore[2],id]);
   if(!old.rows.length)return reply(404,{error:'revision_not_found'});
   const values=editable.map(k=>old.rows[0].snapshot[k]??'');
   values.push(account.id,id,body.expectedUpdatedAt);
   // Restore text only. Never republish an archived/draft example or replace its image.
   const result=await pool.query(`update image_prompt_examples set ${editable.map((k,i)=>`${k}=$${i+1}`).join(',')},updated_by=$11,updated_at=now() where id=$12 and date_trunc('milliseconds',updated_at)=$13::timestamptz returning id,title,status,updated_at`,values);
   if(!result.rows.length)return reply(409,{error:'edit_conflict'});
   emit('prompt.changed',result.rows[0]);return reply(200,{example:result.rows[0]});
  }
  return reply(404,{error:'not_found'});
 };
}
