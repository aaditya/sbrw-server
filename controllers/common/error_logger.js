const path = require('path');
const winston = require('winston');

const logRoot = path.join(__dirname, '/../../logs');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  exitOnError: false,
  transports: [
    new winston.transports.File({ filename: `${logRoot}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${logRoot}/info.log`, level: 'info' }),
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: `${logRoot}/exceptions.log` }),
    new winston.transports.Console({ format: winston.format.simple() }),
  ],
});

module.exports = logger;
