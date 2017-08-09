var WebSocketServer = require('ws').Server;
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer();
const listContainers = require('./helpers/docker/listContainers')

app.use(express.static(path.join(__dirname, '../client/public')));

// listContainers().then((containers) => {
//     //ws.send(JSON.stringify(containers), function () { /* ignore errors */ });
//     console.log(containers);
//   })

var wss = new WebSocketServer({server: server});
wss.on('connection', function (ws) {
  listContainers().then((containers) => {
    ws.send(JSON.stringify(containers), function () { /* ignore errors */ });
  })
  // console.log('started client interval');
  // ws.on('close', function () {
  //   console.log('stopping client interval');
  //   clearInterval(id);
  // });
});

server.on('request', app);
server.listen(8000, function () {
  console.log('Listening on http://localhost:8000');
});