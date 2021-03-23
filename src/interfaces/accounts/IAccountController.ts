import { Context, Next } from 'koa';

interface IAccountController {
  fetchAccounts(ctx: Context, next: Next): void
}

export default IAccountController;
