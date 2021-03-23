import { Context, Next } from 'koa';

import AccountService from '../../domain/account/AccountService';
import IAccountController from '../../interfaces/account/IAccountController';
import Filter from '../../types/Accounts/Filter';
import Sort from '../../types/Accounts/Sort';

class AccountController implements IAccountController {
  private readonly accountService : AccountService

  constructor(
    accountService,
  ) {
    this.accountService = accountService;
  }

  async fetchAccounts(ctx: Context, next: Next) {
    const filter = ctx.query.filter 
     ? JSON.parse(ctx.query.filter as string) as Filter
     : {} as Filter;

    const sort = ctx.query.sort 
     ? JSON.parse(ctx.query.sort as string) as Sort
     : {} as Sort;

    const page = ctx.query.page as string;
    
    const result = await this.accountService.fetchAccounts(filter, sort, page);

    ctx.response.status = 200;
    ctx.response.body = result;
  }
}

export default AccountController;
