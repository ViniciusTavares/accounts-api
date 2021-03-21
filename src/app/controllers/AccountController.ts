import { Context, Next } from 'koa';

class AccountController {
  constructor(
    
  ) {}

  async fetchAccounts(ctx: Context, next: Next) {    
    ctx.response.status = 200;
    ctx.response.body = {};
  }
}

export default AccountController;
