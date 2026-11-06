import { URL } from 'node:url';

export function json(res, status, value, headers = {}) {
  const body = JSON.stringify(value);
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers });
  res.end(body);
}

export function readJson(req, limit = 64 * 1024) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.setEncoding('utf8');
    req.on('data', (chunk) => { body += chunk; if (Buffer.byteLength(body) > limit) reject(Object.assign(new Error('Payload too large'), { statusCode: 413 })); });
    req.on('end', () => { try { resolve(body ? JSON.parse(body) : {}); } catch { reject(Object.assign(new Error('Invalid JSON'), { statusCode: 400 })); } });
    req.on('error', reject);
  });
}

export function requestPath(req) { return new URL(req.url, 'http://localhost').pathname; }

export function setCors(res, origin, allowedOrigin) {
  if (origin && allowedOrigin && origin === allowedOrigin) {
    res.setHeader('access-control-allow-origin', allowedOrigin);
    res.setHeader('access-control-allow-credentials', 'true');
    res.setHeader('vary', 'Origin');
  }
}
