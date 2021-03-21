import Dependencies from './dependency.enum';
import MongoProvider from '../../infrastructure/storage/Providers/MongoProvider';
import AccountRepository from '../../infrastructure/repositories/AccountRepository';
import AccountService from '../../domain/account/AccountService';
import AccountController from '../controllers/AccountController';
import dbConfig from '../../infrastructure/storage/config';

class DependencyContainer {
  private readonly accountController;
  private readonly accountService;
  private readonly accountRepository;
  private readonly mongoProvider;

  constructor() {
    this.mongoProvider = MongoProvider.getInstance();
    this.accountRepository = new AccountRepository(this.mongoProvider.db(dbConfig.collections.accounts))
    this.accountService = new AccountService({ accountRepository: this.accountRepository });
    this.accountController = new AccountController({ service: this.accountService });
  }

  get(dependency: Dependencies) {
    const requestedDependency = this[dependency];

    if (!requestedDependency) {
      throw new Error('invalid dependency request');
    }

    return requestedDependency;
  }
}

export default new DependencyContainer();
