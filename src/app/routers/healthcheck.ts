import Router from '@koa/router';
import { Context } from 'koa';
import container from '../dependency-container/container';
import DependencyEnum from '../dependency-container/dependency.enum';

const router = new Router({
  prefix: '/health',
});

router.get('/', async (ctx: Context) => {
  const dbConnected = true;
  
  ctx.body = 'success';
  ctx.status = 200;
});

export default router;
