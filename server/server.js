import socketIo from 'socket.io';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { ioConnection } from './socket/socket';
import { tokens, typeAuth, config, currencies } from './config/main';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const { port } = config.serverDef;

// event fired every time a new client connects:
io.on('connection', ioConnection);

app.use(cors());

app.use((req, res, next) => {
  let checkAuth=false;
  tokens.forEach(token => {
    if (typeAuth + ' ' + token === req.headers.authorization) {
      checkAuth=!checkAuth;
    }
  });
  (checkAuth)?next():res.send(currencies.nonAutorized);
});

app.get('/v1/currencies', (req, res) => {
  res.send(currencies.autorized);
});

server.listen(port);

console.log('server start on port', port);