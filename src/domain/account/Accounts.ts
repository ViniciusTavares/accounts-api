import AccountType from "../../types/Accounts/Account";

export default class Account {
    public readonly firstName: string;
  
    public readonly lastName: string;
  
    public readonly country: string;
  
    public readonly email: string;
  
    public readonly dob: Date;
  
    public mfa: string;
  
    public amt: string;
  
    public createdDate: Date;
  
    public referredBy: string;
  
    constructor({
      firstName,
        lastName,
        country,
        email,
        dob,
        mfa,
        amt,
        createdDate,
        referredBy,
    } : AccountType) {
      Object.assign(this, {      
        firstName,
        lastName,
        country,
        email,
        dob,
        mfa,
        amt,
        createdDate,
        referredBy,
      });
    }
  }
  