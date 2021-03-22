import { Context, Next } from 'koa';
import AccountService from '../../domain/account/AccountService';

interface IAccountController { 
  fetchAccounts(ctx: Context, next: Next): void
}

class AccountController implements IAccountController {
  private readonly accountService : AccountService;

  constructor(
    accountService,
  ) {
    this.accountService = accountService;
  }

  async fetchAccounts(ctx: Context, next: Next) {    
    const filter = ctx.query.filter; // as filter
    const sort = ctx.query.sort; // as sort

    
    const result = await this.accountService.fetchAccounts(filter ?? {}, sort);

    ctx.response.status = 200;
    ctx.response.body = result ;
  }
}

export default AccountController;
