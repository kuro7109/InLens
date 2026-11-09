const fs = require('fs');
eval(fs.readFileSync(require('path').join(__dirname, '../src/data.js'), 'utf8').replace(/^const /gm, 'var '));
const norm = s => String(s).toLowerCase().replace(/[‘’“”"']/g, '').replace(/[^\p{L}\p{N}₹\s]/gu, ' ').replace(/\s+/g, ' ').trim();
let bad = 0, n = 0;
for (const p of SAMPLE_PROJECTS) {
  const byId = Object.fromEntries(p.interviews.map(i => [i.id, i]));
  for (const iv of p.interviews) {
    const lines = iv.text.split('\n').map(norm);
    const a = iv.analysis;
    for (const q of [...a.pain_points, ...a.feature_requests].flatMap(x => x.quotes).concat(a.memorable_quotes)) {
      n++; if (!lines.some(l => l.includes(norm(q.text)))) { bad++; console.log('MISSING', iv.id, q.text); }
    }
    for (const l of iv.text.split('\n')) { const m = l.match(/^(\w[\w ]*?):/); if (m && m[1] !== 'Interviewer' && m[1] !== iv.participant) console.log('SPEAKER?', iv.id, m[1]); }
  }
  const used = new Set();
  for (const g of [...p.themes, ...p.requests]) for (const m of g.members) {
    const [iid, k] = m.split(':'); const iv = byId[iid]; const list = k.startsWith('pp') ? iv && iv.analysis.pain_points : iv && iv.analysis.feature_requests;
    if (!list || !list[+k.slice(2) - 1]) { bad++; console.log('BAD MEMBER', p.id, m); }
    if (used.has(m)) { bad++; console.log('DUP MEMBER', m); } used.add(m);
  }
  for (const iv of p.interviews) { iv.analysis.pain_points.forEach((_, i) => { if (!used.has(`${iv.id}:pp${i + 1}`)) console.log('UNGROUPED', `${iv.id}:pp${i + 1}`); }); iv.analysis.feature_requests.forEach((_, i) => { if (!used.has(`${iv.id}:fr${i + 1}`)) console.log('UNGROUPED', `${iv.id}:fr${i + 1}`); }); }
}
console.log(`${n} quotes checked, ${bad} problems`);
