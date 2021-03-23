import Account from '../../types/accounts/Account';
import Filter from '../../types/accounts/Filter';
import Sort from '../../types/accounts/Sort';

interface IAccountService {
  fetchAccounts(filter: Filter, sort: Sort, page: number | string) : Promise<Account[]>;
  fetchAccountsForCSV(filter: Filter, sort: Sort, page: number | string) : any;
}

export default IAccountService;
