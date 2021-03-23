import logger from 'koa-pino-logger';
import config from '../config';

export default function () {
  return logger({
    prettyPrint: config.app.isDevEnv,
    level: config.app.logLevel,
  });
}
