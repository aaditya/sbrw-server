const http = require('http');

const mongoose = require('mongoose');

const { logger } = require('../utils/logger');
const config = require('./config.json');
const app = require('../app');

const server = http.createServer(app);
const userver = require('./udpServer');

let port = process.env.PORT || config.details.PORT;

mongoose.connect(config.details.database, { useNewUrlParser: true }, (err) => {
    if (err) {
        logger.info(err.message);
    }
    else {
        logger.info('Database Connected');
    }
});

if (config.features.udp) {
    userver.bind(port);
}

server.listen(port, () => {
    logger.info(`HTTP server active on ${port}.`);
});

module.exports = server;
