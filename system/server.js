const http = require('http');
// const dgram = require('dgram');

const mongoose = require('mongoose');

const config = require('./config.json');
const app = require('../app');

const server = {
    http: http.createServer(app),
    // udp: dgram.createSocket('udp4')
}

let port = process.env.PORT || config.server.port;

mongoose.connect(config.database.url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Database Connected');
    }
})

// server.udp.on('error', (err) => {
//   console.log(`server error:\n${err.stack}`);
//   server.close();
// });

// server.udp.on('message', (msg, rinfo) => {
//   console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
// });

// server.udp.on('listening', () => {
//   const address = server.udp.address();
//   console.log(`UDP server listening on ${address.address}:${address.port}`);
// });

// server.udp.bind(port);

server.http.listen(port, () => {
    console.log(`HTTP server listening on port ${port}.`);
});

module.exports = server;