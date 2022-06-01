import { NextApiRequest, NextApiResponse } from "next";
import twitterClient from "../../HPD";

export default async function Teste(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { next_token, q } = req.query
    console.log(next_token, '---- ', q)
    // 765372796725825536
    let config = {}

    if (next_token) {
      config = {
        expansions: ["attachments.media_keys", "author_id"],
        "media.fields": ['url', 'preview_image_url', 'variants'],
        "user.fields": ['profile_image_url', 'username', 'url', 'description'],
        "tweet.fields": ['possibly_sensitive', 'referenced_tweets', 'source'],
        "max_results": 10, "next_token": next_token
      }
    } else {
      config = {
        expansions: ["attachments.media_keys", "author_id"],
        "media.fields": ['url', 'preview_image_url', 'variants'],
        "user.fields": ['profile_image_url', 'username', 'url', 'description'],
        "tweet.fields": ['possibly_sensitive', 'referenced_tweets', 'source'],
        "max_results": 10
      }
    }

    let query = ""
    if (q) {

      query = `(${decodeURI(q as string)} has:media -is:retweet) OR (#${q} has:media -is:retweet)`

    } else {

      query = '(#beach has:media -is:retweet) OR (#surf has:images -is:retweet)'

    }

    console.log('Pesquisado por: ', query)
    const { data: response } = await twitterClient.v2.search(
      query, config
    )


    try {
      return res.json({
        status: 'SUCCESS',
        data: response.data,
        users: response.includes?.users,
        media: response.includes?.media,
        next_token: response.meta.next_token
      })

    } catch (err) {
      console.log(err)
    }


    return res.json({ reponse: true })
  } else {
    return res.status(401).json({ status: 'ERROR', error: 'Invalid verb' })
  }
}