// Shared helpers for InLens serverless functions (Vercel, Node 18+).
// Keys live only in environment variables: ANTHROPIC_API_KEY (analysis + chat), OPENAI_API_KEY (optional, Whisper transcription).
const ANALYZE_MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5-5';
const CHAT_MODEL = process.env.ANTHROPIC_CHAT_MODEL || 'claude-haiku-5-5';

function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  try { return JSON.parse(req.body || '{}'); } catch (_) { return {}; }
}

// Only answer browser calls from this deployment (or ALLOWED_ORIGINS, comma-separated).
function originAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return true;
  let host;
  try { host = new URL(origin).host; } catch (_) { return false; }
  if (host === req.headers.host) return true;
  const extra = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  return extra.some(o => { try { return new URL(o).host === host; } catch (_) { return o === host; } });
}

function guard(req, res, needs = 'ANTHROPIC_API_KEY') {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.status(405).json({ error: 'Use POST.' }); return false; }
  if (!process.env[needs]) { res.status(503).json({ error: 'This feature is not set up on this deployment.' }); return false; }
  if (!originAllowed(req)) { res.status(403).json({ error: 'This origin is not allowed.' }); return false; }
  return true;
}

async function callClaude({ model, system, messages, max_tokens }) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ model, max_tokens, ...(system ? { system } : {}), messages })
  });
  if (!r.ok) { const e = new Error('Anthropic API error ' + r.status); e.status = r.status; throw e; }
  const j = await r.json();
  return (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('').trim();
}

function parseJSON(text) {
  const a = text.indexOf('{'), b = text.lastIndexOf('}');
  if (a < 0 || b <= a) throw new Error('No JSON in reply');
  return JSON.parse(text.slice(a, b + 1));
}

const str = (v, max) => (typeof v === 'string' ? v : '').slice(0, max);

module.exports = { ANALYZE_MODEL, CHAT_MODEL, readBody, guard, callClaude, parseJSON, str };
