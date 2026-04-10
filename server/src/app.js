const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/database');
const logger = require('./config/logger');
const requestLogger = require('./middleware/request-logger');
const routes = require('./routes');

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/api', routes);

async function start() {
  try {
    await testConnection();
    app.listen(port, () => {
      logger.info(`API escuchando en http://localhost:${port}`);
    });
  } catch (error) {
    logger.error('No se pudo iniciar la API', {
      message: error.message,
      stack: error.stack,
    });
    process.exit(1);
  }
}

start();
