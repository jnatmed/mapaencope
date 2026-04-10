const path = require('path');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
const logger = require('./logger');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || 3306),
    dialect: 'mysql',
    logging: process.env.DB_LOG_SQL === 'true'
      ? (message) => logger.debug(message, { scope: 'sequelize' })
      : false,
  }
);

async function testConnection() {
  logger.info('Testing database connection', {
    host: process.env.DB_HOST || '127.0.0.1',
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT || 3306),
  });
  await sequelize.authenticate();
  logger.info('Database connection established successfully');
}

module.exports = {
  sequelize,
  testConnection,
};
