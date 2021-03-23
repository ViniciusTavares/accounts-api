// @ts-ignore
import bodyParser from 'koa-bodyparser';
import Koa from 'koa';

import config from './config';
import getAccountRouter from './routers/account';
import getHealthCheckerRouter from './routers/health-check';
import MongoProvider from '../infrastructure/storage/Providers/MongoProvider';
import Logger from '../infrastructure/logger/Logger';

const init = async () => {
  const app = new Koa();

  await MongoProvider.getInstance().connect();

  app.use(bodyParser());
  app.use(getAccountRouter().routes());
  app.use(getHealthCheckerRouter().routes());

  const PORT = config.app.port;

  app.listen(PORT);

  Logger.info(`Server running on Port ${PORT}`);
};

export default {
  init
};
