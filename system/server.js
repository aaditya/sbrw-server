const http = require('http');

const mongoose = require('mongoose');

const config = require('./config.json');
const app = require('../app');

const server = http.createServer(app);
const userver = require('./udpServer');

const port = process.env.PORT || config.details.PORT;

mongoose.connect(config.details.database, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Database Connected');
  }
});

if (config.features.udp) {
  userver.bind(port);
}

server.listen(port, () => {
  console.log(`HTTP server active on ${port}.`);
});

module.exports = server;
