import Account from '../../domain/account/Account';
import Filter from '../../types//Accounts/Filter';
import Sort from '../../types/Accounts/Sort';

type AccountServiceConstructorArgs = {
  accountRepository: Object
}

interface IAccountService {
  fetchAccounts(filter: Filter, sort: Sort, page: number | string) : Promise<Account[]>;
  fetchAccountsForCSV(filter: Filter, sort: Sort, page: number | string) : any;
}

class AccountService implements IAccountService{
  private readonly accountRepository; 

  constructor({ accountRepository }: AccountServiceConstructorArgs) {
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
