// Adapted from Eclipse DnD Forge bff/src/identity.mjs; separate Library audience.
import { createPublicKey, verify } from 'node:crypto';

export class IdentityValidationError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = 'IdentityValidationError';
  }
}

function parseSegment(segment, label) {
  if (!/^[A-Za-z0-9_-]+$/.test(segment)) {
    throw new IdentityValidationError('invalid_identity_token', `Identity token ${label} is malformed`);
  }
  try {
    return JSON.parse(Buffer.from(segment, 'base64url').toString('utf8'));
  } catch {
    throw new IdentityValidationError('invalid_identity_token', `Identity token ${label} is malformed`);
  }
}

function validJwk(candidate, kid) {
  return candidate &&
    candidate.kty === 'OKP' &&
    candidate.crv === 'Ed25519' &&
    candidate.alg === 'EdDSA' &&
    candidate.use === 'sig' &&
    candidate.kid === kid &&
    typeof candidate.x === 'string' &&
    /^[A-Za-z0-9_-]{43}$/.test(candidate.x) &&
    candidate.d === undefined;
}

async function boundedJson(response, maxBytes = 65_536) {
  const declared = Number(response.headers.get('content-length') || 0);
  if (declared > maxBytes || !response.body) {
    throw new IdentityValidationError('identity_provider_unavailable', 'Identity provider returned an invalid response');
  }
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBytes) {
      await reader.cancel();
      throw new IdentityValidationError('identity_provider_unavailable', 'Identity provider returned an invalid response');
    }
    chunks.push(Buffer.from(value));
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new IdentityValidationError('identity_provider_unavailable', 'Identity provider returned an invalid response');
  }
}

export class JwksVerifier {
  constructor({ jwksUrl, issuer, audience, fetchImpl = fetch, cacheTtlMs = 300_000, timeoutMs = 10_000 }) {
    this.jwksUrl = jwksUrl;
    this.issuer = issuer;
    this.audience = audience;
    this.fetchImpl = fetchImpl;
    this.cacheTtlMs = cacheTtlMs;
    this.timeoutMs = timeoutMs;
    this.cached = null;
  }

  async loadKeys(force = false) {
    if (!force && this.cached?.expiresAt > Date.now()) return this.cached.keys;
    let response;
    const signal = AbortSignal.timeout(this.timeoutMs);
    try {
      response = await this.fetchImpl(this.jwksUrl, {
        method: 'GET',
        redirect: 'error',
        signal,
        headers: { Accept: 'application/json' },
      });
    } catch {
      throw new IdentityValidationError('identity_provider_unavailable', 'Identity provider is unavailable');
    }
    if (!response.ok) {
      await response.body?.cancel();
      throw new IdentityValidationError('identity_provider_unavailable', 'Identity provider is unavailable');
    }
    const body = await boundedJson(response);
    if (!Array.isArray(body?.keys) || body.keys.length < 1 || body.keys.length > 4) {
      throw new IdentityValidationError('identity_provider_unavailable', 'Identity provider returned an invalid key set');
    }
    this.cached = { keys: body.keys, expiresAt: Date.now() + this.cacheTtlMs };
    return body.keys;
  }

  async verify(token, nowSeconds = Math.floor(Date.now() / 1000)) {
    if (typeof token !== 'string' || token.length < 100 || token.length > 16_384) {
      throw new IdentityValidationError('invalid_identity_token', 'Identity token is malformed');
    }
    const parts = token.split('.');
    if (parts.length !== 3) throw new IdentityValidationError('invalid_identity_token', 'Identity token is malformed');
    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const header = parseSegment(encodedHeader, 'header');
    const claims = parseSegment(encodedPayload, 'payload');
    if (
      !header ||
      Object.keys(header).some((key) => !['alg', 'kid', 'typ'].includes(key)) ||
      header.alg !== 'EdDSA' ||
      header.typ !== 'JWT' ||
      typeof header.kid !== 'string' ||
      !/^[A-Za-z0-9._-]{1,64}$/.test(header.kid)
    ) {
      throw new IdentityValidationError('invalid_identity_token', 'Identity token uses an unsupported signing header');
    }
    if (!/^[A-Za-z0-9_-]{86}$/.test(encodedSignature)) {
      throw new IdentityValidationError('invalid_identity_token', 'Identity token signature is malformed');
    }

    let keys = await this.loadKeys();
    let jwk = keys.find((candidate) => validJwk(candidate, header.kid));
    if (!jwk) {
      keys = await this.loadKeys(true);
      jwk = keys.find((candidate) => validJwk(candidate, header.kid));
    }
    if (!jwk) throw new IdentityValidationError('invalid_identity_token', 'Identity signing key is unknown');

    let signatureOk = false;
    try {
      const key = createPublicKey({ key: jwk, format: 'jwk' });
      signatureOk = verify(
        null,
        Buffer.from(`${encodedHeader}.${encodedPayload}`, 'ascii'),
        key,
        Buffer.from(encodedSignature, 'base64url'),
      );
    } catch {
      signatureOk = false;
    }
    if (!signatureOk) throw new IdentityValidationError('invalid_identity_token', 'Identity token signature is invalid');

    if (
      claims?.iss !== this.issuer ||
      claims?.aud !== this.audience ||
      typeof claims?.sub !== 'string' ||
      !/^[A-Za-z0-9_-]{1,128}$/.test(claims.sub) ||
      typeof claims?.iat !== 'number' ||
      !Number.isInteger(claims.iat) ||
      typeof claims?.exp !== 'number' ||
      !Number.isInteger(claims.exp) ||
      typeof claims?.jti !== 'string' ||
      !/^[0-9a-f-]{36}$/i.test(claims.jti) ||
      claims.iat > nowSeconds + 30 ||
      claims.exp <= nowSeconds ||
      claims.exp - claims.iat > 300 ||
      claims.exp <= claims.iat
    ) {
      throw new IdentityValidationError('invalid_identity_token', 'Identity token claims are invalid');
    }
    return {
      subject: claims.sub,
      displayName: typeof claims.name === 'string' ? claims.name.slice(0, 64) : 'Редактор',
      expiresAt: claims.exp,
      jti: claims.jti,
    };
  }
}