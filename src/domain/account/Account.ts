type AccountContructorArgs = {
  firstName: string;
  lastName: string,
  country: string;
  email: string;
  dob?: Date;
  mfa?: string;
  amt?: string,
  createdDate?: Date;
  referredBy?: String
};

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
  }: AccountContructorArgs) {
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
