// Builds index.html from src/ (a.html + data.js + app.js), embedding the mascot images.
// Usage: npm run bundle
import { readFileSync, writeFileSync } from 'node:fs';
const names = ['hero', 'idle', 'wave', 'mega', 'tile1', 'tile2'];
const M = Object.fromEntries(names.map(n => [n, 'data:image/webp;base64,' + readFileSync(`assets/mascot/${n}.webp`).toString('base64')]));
const js = readFileSync('src/data.js', 'utf8') + '\n' + readFileSync('src/app.js', 'utf8');
if (!js.includes('/*MASCOTS*/{}')) throw new Error('Mascot placeholder missing in src/app.js');
const body = readFileSync('src/a.html', 'utf8') + '\n<script>\n' + js.replace('/*MASCOTS*/{}', () => JSON.stringify(M)) + '\n</script>\n';
const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="InLens turns user interviews into themes, quotes and an email digest. Hinglish-ready, private by default.">
<meta name="theme-color" content="#3560E8">
<link rel="icon" href="favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="assets/icon-180.png">
<link rel="manifest" href="manifest.webmanifest">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="InLens">
</head>
<body>
`;
writeFileSync('index.html', head + body + '</body>\n</html>\n');
console.log('wrote index.html');
