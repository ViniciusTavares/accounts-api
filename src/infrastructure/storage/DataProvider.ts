import { Collection } from 'mongodb';

export default interface DataProvider { 
    db(name: string): Collection, // only mongo driver right now, but can expand to knex for sql or other query builders
    connect(): void,
    close(): void
  }
  
  