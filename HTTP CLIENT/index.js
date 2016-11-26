'use strict';
const http = require('http');

const hostname = process.argv[2];
http.get(hostname, res => {
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error);
}).on('error', console.error);
