import env from 'env-var';

const exceptForTests = process.env.NODE_ENV !== 'test';

const db = Object.freeze({
  connection: {
    host: env.get('DB_HOST').required(exceptForTests).asString(),
    user: env.get('DB_USER').required(exceptForTests).asString(),
    password: env.get('DB_PASSWORD').required(exceptForTests).asString(),
    database: env.get('DB_DATABASE').required(exceptForTests).asString()
  },
  collections: {
    accounts: 'accounts',
  },
});

export default db;
