declare global {
  // Расширяем глобальный объект, добавляя поле _mongoClientPromise
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};
