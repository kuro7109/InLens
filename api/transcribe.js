// POST /api/transcribe  { audio: "data:audio/...;base64,...", filename, language }  ->  { text }
// Uses OpenAI Whisper. Needs OPENAI_API_KEY. Vercel limits request bodies to ~4.5 MB, so keep audio under ~3 MB.
const { readBody, guard, str } = require('./_shared');

module.exports = async (req, res) => {
  if (!guard(req, res, 'OPENAI_API_KEY')) return;
  const b = readBody(req);
  const m = typeof b.audio === 'string' && b.audio.match(/^data:(audio\/[\w.+-]+|video\/webm|application\/octet-stream);base64,([A-Za-z0-9+/=]+)$/);
  if (!m) return res.status(400).json({ error: 'Send the recording as a base64 data URL.' });
  const buf = Buffer.from(m[2], 'base64');
  if (buf.length > 3.2 * 1024 * 1024) return res.status(413).json({ error: 'Recording is over 3 MB.' });
  const lang = str(b.language, 20).toLowerCase();
  const prompt = lang === 'hinglish' || lang === 'auto' || !lang
    ? 'User research interview. Speakers may switch between Hindi and English (Hinglish). Write Hindi words in Latin script.'
    : 'User research interview.';
  const form = new FormData();
  form.append('file', new Blob([buf], { type: m[1] }), str(b.filename, 80) || 'interview.webm');
  form.append('model', process.env.OPENAI_TRANSCRIBE_MODEL || 'whisper-1');
  form.append('prompt', prompt);
  if (lang === 'english') form.append('language', 'en');
  try {
    const r = await fetch('https://api.openai.com/v1/audio/transcriptions', { method: 'POST', headers: { authorization: 'Bearer ' + process.env.OPENAI_API_KEY }, body: form });
    if (!r.ok) return res.status(r.status === 429 ? 429 : 502).json({ error: 'Could not transcribe this recording.' });
    const j = await r.json();
    return res.status(200).json({ text: String(j.text || '') });
  } catch (_) {
    return res.status(502).json({ error: 'Could not transcribe this recording.' });
  }
};
