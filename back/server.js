const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

io.on('connection', socket => {
  console.log(`user ${socket.id} has connected`);

  socket.on('join_room', data => {
    socket.join(data);
  });

  socket.on('send_message', data => {
    socket.to(data.room).emit('receive_message', data);
  });
});

server.listen(4000, () => {
  console.log('listening on 4000');
});
