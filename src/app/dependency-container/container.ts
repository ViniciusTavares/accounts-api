import Dependencies from './dependency.enum';
import MongoProvider from '../../infrastructure/storage/Providers/MongoProvider';
import AccountRepository from '../../infrastructure/repositories/AccountRepository';
import AccountService from '../../domain/account/AccountService';
import AccountController from '../controllers/AccountController';
import config from '../config';

class DependencyContainer {
  private static instance;

  private readonly accountController;

  private readonly accountService;

  private readonly accountRepository;

  private mongoProvider;

  public static getInstance() {
    if (!DependencyContainer.instance) {
      DependencyContainer.instance = new DependencyContainer();
    }

    return DependencyContainer.instance;
  }

  constructor() {
    this.mongoProvider = MongoProvider.getInstance();
    this.accountRepository = new AccountRepository(
      this.mongoProvider.collection(config.database.collections.accounts)
    );
    this.accountService = new AccountService({ accountRepository: this.accountRepository });
    this.accountController = new AccountController(this.accountService);
  }

  get(dependency: Dependencies) {
    const requestedDependency = this[dependency];

    if (!requestedDependency) {
      throw new Error('invalid dependency request');
    }

    return requestedDependency;
  }
}

export default DependencyContainer;
