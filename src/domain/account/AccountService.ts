import Account from '../../domain/account/Account';



type AccountServiceConstructorArgs = { 
  accountRepository: Object
}

interface IAccountService {
  fetchAccounts(filter: any, sort: any) : any;
  fetchAccountsForCSV(filter: any, sort: any) : any;
}

class AccountService implements IAccountService{
  private readonly accountRepository; 

  constructor({ accountRepository }: AccountServiceConstructorArgs) {
    this.accountRepository = accountRepository;
  }

  public async fetchAccounts(filter, sort) {
    return this.accountRepository.fetch(filter, sort);
  }

  public async fetchAccountsForCSV(filter, sort) : Promise<Account[]> { 
    const accounts = await this.accountRepository.fetch(filter, sort);

    return accounts;
  }
}

export default AccountService;
