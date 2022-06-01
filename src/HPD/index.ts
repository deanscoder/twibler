import { TwitterApi } from 'twitter-api-v2';

const config = {
  appKey: process.env.TT_API_KEY as string,
  appSecret: process.env.TT_API_KEY_SECRET as string,
  accessToken: process.env.TT_API_ACCESS_KEY as string,
  accessSecret: process.env.TT_API_TOKEN as string
}

// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi(config);

// Tell typescript it's a readonly app
const roClient = twitterClient.readOnly;

//console.log(roClient.v2.me())

export default twitterClient
