// POST /api/chat  { context: string, messages: [{role, content}] }  ->  { text }
const { CHAT_MODEL, readBody, guard, callClaude, str } = require('./_shared');
const { CHAT_RULES } = require('./_prompts');

module.exports = async (req, res) => {
  if (!guard(req, res)) return;
  const body = readBody(req);
  const msgs = [];
  for (const m of (Array.isArray(body.messages) ? body.messages : []).slice(-12)) {
    if (!m || (m.role !== 'user' && m.role !== 'assistant') || typeof m.content !== 'string' || !m.content.trim()) continue;
    const content = m.content.slice(0, 2000), last = msgs[msgs.length - 1];
    if (last && last.role === m.role) last.content += '\n' + content; else msgs.push({ role: m.role, content });
  }
  while (msgs.length && msgs[0].role !== 'user') msgs.shift();
  if (!msgs.length || msgs[msgs.length - 1].role !== 'user') return res.status(400).json({ error: 'The last message must be from the user.' });
  const system = CHAT_RULES + '\n\n<project_notes>\n' + str(body.context, 8000) + '\n</project_notes>';
  try {
    const text = await callClaude({ model: CHAT_MODEL, max_tokens: 600, system, messages: msgs });
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(e.status === 429 ? 429 : 502).json({ error: 'Could not reach the AI just now.' });
  }
};
