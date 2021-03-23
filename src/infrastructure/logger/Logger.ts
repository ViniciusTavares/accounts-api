import pino from 'pino';
import config from '../../app/config';

const isDevEnv = config.app.isDevEnv;
const logLevel = config.app.logLevel;

const logger = pino({
    prettyPrint: isDevEnv,
    level: logLevel,
  });

export default class Logger { 
    public static info(msg, obj?) { 
       logger.info(msg);
    }

    public static error(error, msg?) { 
        logger.error(error, msg);
    }
}

