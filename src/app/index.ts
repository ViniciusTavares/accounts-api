// @ts-ignore
import bodyParser from 'koa-bodyparser';
import env from 'env-var';
import Koa from 'koa';

import account from './routers/account';
import healthcheck from './routers/healthcheck';

import requestLogger from './middlewares/request-logger';
import MongoProvider from '../infrastructure/storage/Providers/MongoProvider';

(async function main() {
const app = new Koa();

await MongoProvider.getInstance().connect();

app.use(requestLogger())
app.use(bodyParser());
app.use(healthcheck.routes())
app.use(account.routes());

const PORT = env.get('PORT').required().asInt();

app.listen(PORT);
})();
