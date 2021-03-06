import config from '../../../../app/config';
import transformConnectionString from '../../utils/transform-connection-string';

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

  migrationsDir: 'src/infrastructure/storage/migrations',
  changelogCollectionName: 'migrations',
  migrationFileExtension: '.ts'
};
