import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';
import url, { URLSearchParams } from 'url';
import axios from 'axios';

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
  request: VercelRequest,
  response: VercelResponse,
): Promise<VercelResponse> => {
  const { code } = request.body;

  const githubResponse = await axios.post(
    `https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GITHUB_AUTH_CLIENT_SECRET}&code=${code}`,
  );

  const params = new URLSearchParams(githubResponse.data);
  const accessToken = params.get('access_token');

  const githubUser = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection(
    process.env.ENVIRONMENT === 'development' ? 'users_dev' : 'users',
  );

  const userAlreadyExists = await collection.findOne({
    username: { $eq: githubUser.data.login },
  });

  if (userAlreadyExists) {
    return response.status(200).json(userAlreadyExists);
  }

  const user = await collection.insertOne({
    name: githubUser.data.name,
    username: githubUser.data.login,
    avatarUrl: githubUser.data.avatar_url,
    level: 1,
    totalExperience: 0,
    currentExperience: 0,
    challengesCompleted: 0,
  });

  return response.status(201).json(user.ops[0]);
};
