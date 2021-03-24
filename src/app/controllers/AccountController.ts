import { Context } from 'koa';
import json2csv from 'json2csv';

import AccountService from '../../domain/account/AccountService';
import IAccountController from '../../interfaces/accounts/IAccountController';
import Filter from '../../types/accounts/Filter';
import Sort from '../../types/accounts/Sort';

class AccountController implements IAccountController {
  private readonly accountService : AccountService;

  constructor(
    accountService,
  ) {
    this.accountService = accountService;
  }

  async fetchAccounts(ctx: Context) {
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

  async downloadCSVAccounts(ctx: Context) {
    const filter = ctx.query.filter
      ? JSON.parse(ctx.query.filter as string) as Filter
      : {} as Filter;

    const sort = ctx.query.sort
      ? JSON.parse(ctx.query.sort as string) as Sort
      : {} as Sort;

    const page = ctx.query.page as string;

    const result = await this.accountService.fetchAccounts(filter, sort, page);


    ctx.response.status = 200;

    if (!result || result.length === 0) {
      ctx.response.body = [];

      return;
    }

    const csv = json2csv.parse(result);

    ctx.response.status = 200;
    ctx.response.body = csv;
    ctx.set('content-disposition', 'attachment; filename="accounts.csv"');
    ctx.set('content-type', 'text/csv');
  }
}

export default AccountController;
