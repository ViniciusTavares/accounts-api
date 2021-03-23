import { Collection } from 'mongodb';
import IAccountRepository from '../../interfaces/accounts/IAccountRepository';
import Account from '../../types/accounts/Account';
import Sort from '../../types/accounts/Sort';

const limit = 20;

class AccountRepository implements IAccountRepository {
  constructor(
    private readonly db : Collection
  ) {

  }

  public async fetch(filter: Partial<Account>, sort: Sort, page: number = 1): Promise<Account[]> {
    const skip = page > 1
      ? limit * page
      : 0;

    return this.db
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(20)
      .toArray();
  }
}

export default AccountRepository;
