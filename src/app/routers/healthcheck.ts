import Router from '@koa/router';
import { Context } from 'koa';

const router = new Router({
  prefix: '/health',
});

router.get('/', async (ctx: Context) => {
  ctx.body = 'success';
  ctx.status = 200;
});

export default router;
