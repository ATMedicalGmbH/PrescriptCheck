const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

const PORT = config.port;

app.listen(PORT, () => {
  logger.info(`🚀 Server läuft auf Port ${PORT}`);
});
