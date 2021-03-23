import Account from "../../types/Accounts/Account";
import Filter from "../../types/Accounts/Filter";
import Sort from "../../types/Accounts/Sort";

interface IAccountService {
    fetchAccounts(filter: Filter, sort: Sort, page: number | string) : Promise<Account[]>;
    fetchAccountsForCSV(filter: Filter, sort: Sort, page: number | string) : any;
  }

export default IAccountService;