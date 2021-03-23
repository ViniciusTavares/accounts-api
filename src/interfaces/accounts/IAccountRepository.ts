import Account from '../../types/accounts/Account';
import Sort from '../../types/accounts/Sort';

interface IAccountRepository {
  fetch(filter: Partial<Account>, sort: Sort, page: number): Promise<Account[]>;
}

export default IAccountRepository;
