import { Collection } from "mongodb";
import Account from '../../domain/account/Account';

const limit = 20;

type Sort = { 
  createdDate: -1 | 1
}

interface IAccountRepository {
  fetch(filter: Partial<Account>, sort: Sort, page: number): Promise<Account[]>;
}

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
