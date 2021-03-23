import Account from "../../types/Accounts/Account";
import Sort from "../../types/Accounts/Sort";

interface IAccountRepository {
    fetch(filter: Partial<Account>, sort: Sort, page: number): Promise<Account[]>;
  }


  export default IAccountRepository;