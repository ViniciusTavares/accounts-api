import { Collection } from "mongodb";
import IAccountRepository from "../../interfaces/account/IAccountRepository";
import Account from '../../types/Accounts/Account';
import Sort from "../../types/Accounts/Sort";

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
