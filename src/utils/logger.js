/**
 * src/utils/logger.js
 * Logging utility using Winston.
 */

const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ],
});

module.exports = logger;
