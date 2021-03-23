import { Collection } from 'mongodb';

export default interface IDataProvider {
  // only mongo driver right now, but can expand to knex for sql or other query builders
  collection(name: string): Collection,
  connect(): void,
  close(): void
}
