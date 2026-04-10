const logger = require('../config/logger');

function requestLogger(req, res, next) {
  const startedAt = Date.now();

  logger.info('HTTP request started', {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
  });

  res.on('finish', () => {
    logger.info('HTTP request finished', {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      durationMs: Date.now() - startedAt,
    });
  });

  next();
}

module.exports = requestLogger;
