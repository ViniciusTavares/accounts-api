import Router from '@koa/router';

import dependencyContainer from '../dependency-container/container';
import dependencyEnum from '../dependency-container/dependency.enum';
import AccountController from '../controllers/AccountController';


const controller = dependencyContainer.get(
  dependencyEnum.ACCOUNT_CONTROLLER
) as AccountController;

const router = new Router({
  prefix: '/product',
});

router.get('/', (...args) =>
  controller.fetchAccounts(...args)
);

export default router;
