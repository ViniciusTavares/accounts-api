import config from '../src/app/config';
import transformConnectionString from '../src/infrastructure/storage/utils/transform-connection-string';

const connectionString = transformConnectionString(config.database.connection);

module.exports = {
  mongodb: {
    url: connectionString,
    databaseName: config.database.connection.database,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: 'build/db/migrations',
  changelogCollectionName: 'migrations',
  migrationFileExtension: '.js'
};
