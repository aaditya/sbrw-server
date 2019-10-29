const dgram = require('dgram');
const { logger } = require('../utils/logger');

const userver = dgram.createSocket('udp4');

userver.on('error', (err) => {
    logger.info(`server error:\n${err.stack}`);
    server.close();
});

userver.on('message', (msg, rinfo) => {
    logger.info(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

userver.on('listening', () => {
    const address = userver.address();
    logger.info(`UDP server active on ${address.address}:${address.port}`);
});

module.exports = userver;
