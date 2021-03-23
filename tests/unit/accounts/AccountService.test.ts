import AccountService from '../../../src/domain/account/AccountService';

const accountMocks = [{
    firstName: "mock",
    lastName: "mock",
    country: "CL",
    email: "mock@gmail.com",
    dob: "1978-06-27T21:48:28.458Z",
    mfa: null,
    amt: "132431",
    createdDate: "2019-10-11T13:31:39.152Z",
    ReferredBy: null
  }];

describe('Account Service', () => {
    let accountRepository;
    let accountService;

    beforeAll(() => { 
        accountRepository = { 
           fetch: jest.fn().mockResolvedValue(accountMocks)
        }

        accountService = new AccountService({ accountRepository });
    });

    test('It should fetch accounts and match expected result', async () => { 
        const result = await accountService.fetchAccounts({}, {});

        expect(accountRepository.fetch).toBeCalledTimes(1);
        expect(result).toEqual(accountMocks);
    });
})