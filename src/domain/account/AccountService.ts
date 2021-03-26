import Account from '../../types/accounts/Account';
import Filter from '../../types/accounts/Filter';
import Sort from '../../types/accounts/Sort';
import IAccountService from '../../interfaces/accounts/IAccountService';
import AccountServiceArgs from '../../types/accounts/AccountServiceArgs';

class AccountService implements IAccountService {
  private readonly accountRepository;

  constructor({ accountRepository } : AccountServiceArgs) {
    this.accountRepository = accountRepository;
  }

  public async fetchAccounts(
    filter: Filter,
    sort: Sort,
    page: number | string,
  ) : Promise<Account[]> {
    if (filter.firstName) {
      filter.firstName = new RegExp(`${filter.firstName}`);
    }

    if (filter.lastName) {
      filter.lastName = new RegExp(`${filter.lastName}`);
    }

    if (filter.country) {
      filter.country = new RegExp(`${filter.country}`);
    }


    if (filter.mfa) {
      filter.mfa = new RegExp(`${filter.mfa}`);
    }

    return this.accountRepository.fetch(filter, sort, page);
  }

  public async fetchAccountsForCSV(filter, sort) : Promise<Account[]> {
    const accounts = await this.accountRepository.fetch(filter, sort);

    return accounts;
  }
}

export default AccountService;
