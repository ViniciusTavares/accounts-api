import env from 'env-var';

const exceptForTests = process.env.NODE_ENV !== 'test';

const db = Object.freeze({
    app: { 
        port: env.get('APP_PORT').default(3000).asString(),
        isDevEnv: process.env.NODE_ENV !== 'production',
        logLevel: env.get('LOG_INFO').default('info').asString(),
    },
    database: { 
        connection: {
            url: env.get('DB_URL').required(exceptForTests).asString(),
            user: env.get('DB_USER').required(exceptForTests).asString(),
            password: env.get('DB_PASSWORD').required(exceptForTests).asString(),
            database: env.get('DB_DATABASE').required(exceptForTests).asString()
        },
        collections: {
            accounts: 'accounts',
        }
    }
});

export default db;
