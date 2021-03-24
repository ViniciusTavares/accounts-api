import pino from 'pino';
import config from '../../app/config';

const { isDevEnv } = config.app;
const { logLevel } = config.app;

const logger = pino({
  prettyPrint: isDevEnv,
  level: logLevel,
});

export default class Logger {
  public static info(msg) {
    logger.info(msg);
  }

  public static error(error, msg?) {
    logger.error(error, msg);
  }
}
