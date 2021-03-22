import { Collection } from "mongodb";
import Account from '../../domain/account/Account';

type Sort = { 
  createdDate: -1 | 1
}

interface IAccountRepository {
  fetch(filter: Partial<Account>, sort: Sort): Promise<Account[]>;
}

class AccountRepository implements IAccountRepository {
  constructor( 
    private readonly db : Collection
  ) {
    
  }

  public async fetch(filter: Partial<Account>, sort: Sort ): Promise<Account[]> {
    return this.db
      .find(filter)
      .sort(sort)
      .toArray();
  }
}

export default AccountRepository;
