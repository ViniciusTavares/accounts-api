import { Collection, Db, MongoClient } from 'mongodb';

import config from '../../../app/config';
import transformConnectionString from '../utils/transform-connection-string';
import DataProvider from './DataProvider'; 

export default class MongoProvider implements DataProvider {
  private static instance: MongoProvider;

  private conn: Db;

  private client: MongoClient;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): MongoProvider {
    if (!MongoProvider.instance) {
      MongoProvider.instance = new MongoProvider();
    }

    return MongoProvider.instance;
  }

  public db(name: string): Collection {
    return this.conn.collection(name);
  }

  public connection(): Db {
    return this.conn;
  }

  public async connect() {
    const connectionString = transformConnectionString(config.database.connection);
    const client = new MongoClient(connectionString, {
      useUnifiedTopology: true,
    });
    this.client = client;

    try {
      await client.connect();
      this.conn = client.db(config.database.connection.database);
    } catch (e) {
      // logger.error(e.message, dbConfig.connection.url);
      throw e;
    }
  }

  public async close() {
    try {
      await this.client.close();
    } catch (e) {
      // logger.error(e.message, dbConfig.connection.url);
      throw e;
    }
  }
}
