const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');

const logDir = path.resolve(__dirname, '../../logs');

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'mapa-backend' },
  transports: [
    new transports.File({ filename: path.join(logDir, 'error.log'), level: 'error' }),
    new transports.File({ filename: path.join(logDir, 'combined.log') }),
  ],
});

logger.add(
  new transports.Console({
    format: format.combine(
      format.colorize(),
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      format.printf(({ timestamp, level, message, ...meta }) => {
        const metaString = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
        return `${timestamp} ${level}: ${message}${metaString}`;
      })
    ),
  })
);

module.exports = logger;
