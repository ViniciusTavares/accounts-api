import dbConfig from '../src/infrastructure/storage/config';
import transformConnectionString from '../src/infrastructure/storage/utils/transform-connection-string';

const connectionString = transformConnectionString(dbConfig.connection);

module.exports = {
  mongodb: {
    url: connectionString,
    databaseName: dbConfig.connection.database,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: 'build/db/migrations',
  changelogCollectionName: 'migrations',
  migrationFileExtension: '.js'
};
