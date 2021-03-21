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
    ctx.response.status = 200;
    this.accountService.fetchAccounts();
    ctx.response.body = {};
  }
}

export default AccountController;
