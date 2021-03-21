

type AccountServiceConstructorArgs = { 
  accountRepository: Object
}

class AccountService {
  private readonly accountRepository; 

  constructor({ accountRepository }: AccountServiceConstructorArgs) {
    this.accountRepository = accountRepository;
  }

  public async fetchAccounts() {
    return this.accountRepository.fetch();
  }
}

export default AccountService;
