import Router from '@koa/router';

import DependencyContainer from '../dependency-container/container';
import dependencyEnum from '../dependency-container/dependency.enum';

export default () : Router => {
  const controller = DependencyContainer.getInstance().get(
    dependencyEnum.ACCOUNT_CONTROLLER
  );

  const router = new Router({
    prefix: '/accounts',
  });

  router.get('/', (...args) => controller.fetchAccounts(...args));

  router.get('/csv', (...args) => controller.downloadCSVAccounts(...args));

  return router;
};
