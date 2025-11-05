const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', // Set the default log level
    format: winston.format.combine(
        winston.format.timestamp(), // Add timestamps to logs
        winston.format.json() // Format logs as JSON
    ),
    transports: [
        new winston.transports.Console(), // Log to console
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to error.log
        new winston.transports.File({ filename: 'combined.log' }) // Log all messages to combined.log
    ],
});

module.exports = logger;