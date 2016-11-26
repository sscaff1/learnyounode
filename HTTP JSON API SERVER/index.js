const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.end('send me a GET request');
  }
  const parsedUrl = url.parse(req.url, true);
  if (!parsedUrl.query.iso) {
    res.end('you did not provide a query parameter');
  }
  const requestDate = new Date(parsedUrl.query.iso);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  switch (parsedUrl.pathname) {
    case '/api/parsetime': {
      res.end(JSON.stringify({
        hour: requestDate.getHours(),
        minute: requestDate.getMinutes(),
        second: requestDate.getSeconds(),
      }));
    }
    case '/api/unixtime': {
      res.end(JSON.stringify({ unixtime: requestDate.getTime() }));
    }
    default: {
      res.end('you did not provide a valid path');
    }
  }
});

server.listen(process.argv[2]);
