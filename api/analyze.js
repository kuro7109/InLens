// POST /api/analyze
//   { kind: "interview", transcript, project: {name, goal}, language }        -> analysis JSON
//   { kind: "cluster", items, requests, existing, project, interviews }        -> themes JSON
// Prompts are fixed on the server; the browser only sends data.
const { ANALYZE_MODEL, readBody, guard, callClaude, parseJSON, str } = require('./_shared');
const { P_INTERVIEW, P_CLUSTER } = require('./_prompts');

module.exports = async (req, res) => {
  if (!guard(req, res)) return;
  const b = readBody(req);
  const project = { name: str(b.project && b.project.name, 120), goal: str(b.project && b.project.goal, 240) };
  let prompt, max_tokens;
  if (b.kind === 'interview') {
    const transcript = str(b.transcript, 60000);
    if (transcript.split(/\s+/).length < 12) return res.status(400).json({ error: 'The transcript is too short.' });
    prompt = P_INTERVIEW({ transcript, project, language: str(b.language, 20) || 'auto' });
    max_tokens = 3000;
  } else if (b.kind === 'cluster') {
    const items = str(b.items, 24000);
    if (!items.trim()) return res.status(400).json({ error: 'Nothing to group.' });
    prompt = P_CLUSTER({ items, requests: str(b.requests, 12000), existing: str(b.existing, 4000), project, interviews: Math.max(1, Math.min(200, parseInt(b.interviews, 10) || 1)) });
    max_tokens = 2500;
  } else {
    return res.status(400).json({ error: 'Unknown kind.' });
  }
  try {
    const text = await callClaude({ model: ANALYZE_MODEL, max_tokens, messages: [{ role: 'user', content: prompt }] });
    return res.status(200).json(parseJSON(text));
  } catch (e) {
    return res.status(e.status === 429 ? 429 : 502).json({ error: 'Could not analyse this just now.' });
  }
};
