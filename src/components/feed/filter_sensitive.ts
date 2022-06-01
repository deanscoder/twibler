import { TweetV2 } from "twitter-api-v2";

export default function filter_sensitive_tweets(
  new_tweets: Array<TweetV2>,
  tweets: Array<TweetV2>,
  sensitive: Array<TweetV2>
) {

  if (new_tweets) {

    const filtered_tt = new_tweets.filter((x) => x.possibly_sensitive === false)
    const sensitive_tt = new_tweets.filter((x) => x.possibly_sensitive === true)

    let temp_tweets = tweets.concat(filtered_tt)
    let temp_tweets_sensitive = sensitive.concat(sensitive_tt)

    // CLEAR ARRAYS BECAUSE TWITTER EXPLORE
    // HAS SO MUCH FLOOD, BOTS AND SPAMMERS
    // POSTING THE SAME CONTENT
    temp_tweets = temp_tweets.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.text === value.text || t.id === value.id ||
        t.attachments?.media_keys === value.attachments?.media_keys
      ))
    )

    temp_tweets_sensitive = temp_tweets_sensitive
      .filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.text === value.text || t.id === value.id ||
          t.attachments?.media_keys === value.attachments?.media_keys
        ))
      )

    return ({
      tweets: temp_tweets,
      tweets_sensitive: temp_tweets_sensitive
    })

  } else {

    return ({ tweets: [], tweets_sensitive: [] })
  }
}