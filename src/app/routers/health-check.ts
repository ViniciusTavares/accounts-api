import Router from '@koa/router';
import { Context } from 'koa';

export default () : Router => { 
  const router = new Router({
    prefix: '/health',
  });

  router.get('/', async (ctx: Context) => {
    ctx.body = 'success';
    ctx.status = 200;
  });

  return router
}
