// GET /api/status -> { ai, transcribe }  (the app shows "AI" or "Offline" from this)
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ ai: !!process.env.ANTHROPIC_API_KEY, transcribe: !!process.env.OPENAI_API_KEY && !!process.env.ANTHROPIC_API_KEY });
};
