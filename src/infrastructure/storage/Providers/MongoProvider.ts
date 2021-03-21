import { Collection, Db, MongoClient } from 'mongodb';

import dbConfig from '../config';
import transformConnectionString from '../utils/transform-connection-string';

export default class MongoConnection {
  private static instance: MongoConnection;

  private conn: Db;

  private client: MongoClient;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }

    return MongoConnection.instance;
  }

  public collection(name: string): Collection {
    return this.conn.collection(name);
  }

  public connection(): Db {
    return this.conn;
  }

  public async connect() {
    const client = new MongoClient(transformConnectionString(dbConfig), {
      useUnifiedTopology: true,
    });
    this.client = client;

    try {
      await client.connect();
      this.conn = client.db(dbConfig.connection.database);
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
