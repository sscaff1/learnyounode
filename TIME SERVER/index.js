'use strict';
const net = require('net');
const moment = require('moment');

const server = net.createServer(socket => {
  const data = moment().format('YYYY-MM-DD HH:mm');
  // I think this may be a bug. I'm not sure why I need the \n.
  socket.end(`${data}\n`);
});

server.listen(process.argv[2]);
