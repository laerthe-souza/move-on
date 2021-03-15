import { NowRequest, NowResponse, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (
  request: NowRequest,
  response: NowResponse,
): Promise<VercelResponse> => {
  const {
    username,
    level,
    currentExperience,
    totalExperience,
    challengesCompleted,
  } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection(
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
      ? 'users_dev'
      : 'users',
  );

  await collection.updateOne(
    {
      username: { $eq: username },
    },
    {
      $set: { level, currentExperience, totalExperience, challengesCompleted },
    },
  );

  return response
    .status(200)
    .json({ message: 'Dados atualizados com sucesso' });
};
