type Account = {
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


export default Account;