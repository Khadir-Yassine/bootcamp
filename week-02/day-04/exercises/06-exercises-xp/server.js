'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../../..');
const base = '/day-04/exercises/06-exercises-xp/';
const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    for await (const chunk of req) { body += chunk; if (body.length > 10000) { res.writeHead(413); res.end('Form too large'); return; } }
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ method: req.method, fields: Object.fromEntries(new URLSearchParams(body)) }, null, 2)); return;
  }
  const url = new URL(req.url, 'http://localhost');
  const requestPath = url.pathname === '/' ? base + 'index.html' : url.pathname;
  let file;
  try { file = path.resolve(root, '.' + decodeURIComponent(requestPath)); } catch { res.writeHead(400); res.end('Bad URL'); return; }
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': ({ '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' })[path.extname(file)] || 'text/plain' }); res.end(data);
  });
});
if (require.main === module) server.listen(3040, '127.0.0.1', () => console.log(`Open http://localhost:3040${base}index.html`));
module.exports = server;
