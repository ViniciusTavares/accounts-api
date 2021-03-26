type Filter = {
  firstName?: string | RegExp,
  lastName?: string | RegExp,
  country?: string | RegExp,
  mfa?: string | RegExp
};

export default Filter;
