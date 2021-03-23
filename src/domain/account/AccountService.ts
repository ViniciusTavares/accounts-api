import Account from '../../types/Accounts/Account';
import Filter from '../../types//Accounts/Filter';
import Sort from '../../types/Accounts/Sort';
import IAccountService from '../../interfaces/account/IAccountService';
import AccountServiceArgs from '../../types/Accounts/AccountServiceArgs';

class AccountService implements IAccountService{
  private readonly accountRepository; 

  constructor({ accountRepository } : AccountServiceArgs ) {
    this.accountRepository = accountRepository;
  }

  public async fetchAccounts(filter: Filter, sort: Sort, page: number | string ): Promise<Account[]> {
  if(filter.firstName) { 
    filter.firstName = new RegExp(`${filter.firstName}`)
  }

  if(filter.lastName) { 
    filter.lastName = new RegExp(`${filter.lastName}`)
  }

    return this.accountRepository.fetch(filter, sort, page);
  }

  public async fetchAccountsForCSV(filter, sort) : Promise<Account[]> { 
    const accounts = await this.accountRepository.fetch(filter, sort);

    return accounts;
  }
}

export default AccountService;
