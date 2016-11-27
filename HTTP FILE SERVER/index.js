'use strict';
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const src = fs.createReadStream(process.argv[3]);
  src.pipe(res);
})

server.listen(process.argv[2])
