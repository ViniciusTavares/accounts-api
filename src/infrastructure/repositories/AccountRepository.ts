import { Collection } from "mongodb";
import Account from '../../domain/account/Account';

interface IAccountRepository {
  fetch(filter: Partial<Account>): Promise<Account[]>;
}


class AccountRepository implements IAccountRepository {
  constructor( 
    private readonly db : Collection
  ) {
    
  }

  public async fetch(filter: Partial<Account>): Promise<Account[]> {
    return this.db.find(filter).toArray();
  }
  
}

export default AccountRepository;
