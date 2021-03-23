import mongoDb from '../../src/infrastructure/storage/Providers/MongoProvider';
import fs from 'fs';
import path from 'path';

(async () => {
    await mongoDb.getInstance().connect();

    const seedsCollection = await mongoDb.getInstance().db('seeds');

    const basePath = path.join(__dirname, 'data');

    const files = await fs.promises.readdir(basePath);

    console.log('Found files', files);

    for( let fileName of files ) {
        console.log(fileName);
        const contentArray = JSON.parse(fs.readFileSync(path.join(basePath, fileName)).toString());
            
        const collectionName = fileName.replace(/.json/g, '');
        
        const foundSeed = await seedsCollection.findOne({ fileName });

        if(!foundSeed) {
            const contentCollection = await mongoDb.getInstance().db(collectionName);
                
            await contentCollection.insertMany(contentArray);
            await seedsCollection.insertOne({ fileName });

            console.log(`Sucessfully seeded ${fileName}`);
        }
    }
})();