const winston = require('winston');

const options = {
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
};

const logger = winston.createLogger(options);

module.exports = {
    options,
    logger
};
