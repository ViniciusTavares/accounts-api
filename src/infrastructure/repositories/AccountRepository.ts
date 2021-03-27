import { Collection } from 'mongodb';
import IAccountRepository from '../../interfaces/accounts/IAccountRepository';
import Account from '../../types/accounts/Account';
import Sort from '../../types/accounts/Sort';

// TODO: handle rows limit, 500 is fixed for now

class AccountRepository implements IAccountRepository {
  constructor(
    private readonly db : Collection
  ) {

  }

  public async fetch(
    filter: Partial<Account>,
    sort: Sort,
    page: number = 1,
    limit: number = 500
  ): Promise<Account[]> {
    const skip = page > 1
      ? limit * page
      : 0;

    return this.db
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .toArray();
  }
}

export default AccountRepository;
