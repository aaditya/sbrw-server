const dgram = require('dgram');

const userver = dgram.createSocket('udp4');

userver.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

userver.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

userver.on('listening', () => {
    const address = userver.address();
    console.log(`UDP server active on ${address.address}:${address.port}`);
});

module.exports = userver;