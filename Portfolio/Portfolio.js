// main.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:27017/`);
});