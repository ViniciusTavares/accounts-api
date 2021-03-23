import { Collection, Db, MongoClient } from 'mongodb';

import config from '../../../app/config';
import transformConnectionString from '../utils/transform-connection-string';
import IDataProvider from '../../../interfaces/providers/IDataProvider';

export default class MongoProvider implements IDataProvider {
  private static instance: MongoProvider;

  private conn: Db;

  private client: MongoClient;

  public static getInstance(): MongoProvider {
    if (!MongoProvider.instance) {
      MongoProvider.instance = new MongoProvider();
    }

    return MongoProvider.instance;
  }

  public collection(name: string): Collection {
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
