import fs from 'fs';
import path from 'path';
import mongoDb from '../Providers/MongoProvider';
import Logger from '../../logger/Logger';

(async () => {
  await mongoDb.getInstance().connect();

  const seedsCollection = await mongoDb.getInstance().collection('seeds');

  const basePath = path.join(__dirname, 'data');

  const files = await fs.promises.readdir(basePath);

  for (const fileName of files) {
    const contentArray = JSON.parse(fs.readFileSync(path.join(basePath, fileName)).toString());

    const collectionName = fileName.replace(/.json/g, '');

    const foundSeed = await seedsCollection.findOne({ fileName });

    if (!foundSeed) {
      const contentCollection = await mongoDb.getInstance().collection(collectionName);

      await contentCollection.insertMany(contentArray);
      await seedsCollection.insertOne({ fileName });

      Logger.info(`Sucessfully seeded ${fileName}`);
    }
  }

  process.exit(0);
})();
