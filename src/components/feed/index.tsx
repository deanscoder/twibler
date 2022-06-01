import { useEffect, useState } from 'react'
import { MediaObjectV2, TweetV2, UserV2 } from 'twitter-api-v2'
import ion from '../../HPD/ion'
import * as css from './styles'
import InfiniteScroll from 'react-infinite-scroll-component'
import { PulseLoader } from 'react-spinners'
import Controlers from './controlers'
import filter_sensitive_tweets from './filter_sensitive'
import { useRouter } from 'next/router'
import Switch from "react-switch"
import User_Popup from '../userpopup'

interface Media extends MediaObjectV2 {
  variants?: Array<{
    bit_rate: number
    content_type: string
    url: string
  }>
}

const profile_image = "https://64.media.tumblr.com/5f4e04184959afa08d354e30b559b282/70e8f63c062c19b2-1d/s64x64u_c1/70e3b7b9da5dc203cfeea5da055769b454c3d096.pnj"

const Feed = (props: any): JSX.Element => {
  const [tweets, __tweets] = useState([] as Array<TweetV2>)
  const [unsafe_tweets, __unsafe_tweets] = useState([] as Array<TweetV2>)
  const [authors, __authors] = useState([] as Array<UserV2>)
  const [medias, __medias] = useState([] as Array<Media>)
  const [tweets_sensitive, __tweets_sensitive] = useState([] as Array<TweetV2>)
  const [next_token, __next_token] = useState('')
  const [loading, __loading] = useState(false)
  const [nsfw, __nsfw] = useState(true)
  const [query, __query] = useState('')

  const Router = useRouter()
  const { q } = Router.query

  function user_popup_visible(id: string, action: boolean): void {
    let popup = document.getElementById(id) as HTMLDivElement

    if (popup) {
      popup.setAttribute('visible', `${action}`)
    }

  }

  function register_videos_listeners(): void {
    var videos = document.getElementsByTagName("video");

    var fraction = 0.6; // Play when 60% of the player is visible.

    for (var i = 0; i < videos.length; i++) {

      var video = videos[i];

      var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth,
        h = video.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

      visibleX = Math.max(
        0,
        Math.min(
          w,
          window.pageXOffset + window.innerWidth - x,
          r - window.pageXOffset
        )
      );

      visibleY = Math.max(
        0,
        Math.min(
          h,
          window.pageYOffset + window.innerHeight - y,
          b - window.pageYOffset
        )
      );

      visible = visibleX * visibleY / (w * h);

      if (visible > fraction) {
        video.play();
      } else {
        video.pause();
      }

    }
  }

  async function require_new_tweets(): Promise<void> {
    __loading(true)


    const { data: res } = await ion({
      method: 'get',
      url: '/api/teste',
      params: { q: props ? query : '' }
    })

    if (res) {
      reset_states()
      const {
        tweets: temp_tweets,
        tweets_sensitive: temp_tweets_sensitive
      } = filter_sensitive_tweets(res.data, tweets, tweets_sensitive)

      __unsafe_tweets(
        soft_filter(unsafe_tweets.concat(res.data))
      )
      __tweets(temp_tweets)
      __authors(authors.concat(res.users))
      __medias(medias.concat(res.media))
      __tweets_sensitive(temp_tweets_sensitive)
      __next_token(res.next_token)
      console.log(tweets)
      console.log(next_token)
    }
    __loading(false)
  }

  async function require_twittes(): Promise<void> {
    __loading(true)

    try {
      const { data: res } = await ion({
        method: 'get',
        url: '/api/teste',
        params: { next_token, q: props ? query : '' }
      })

      if (res) {
        const {
          tweets: temp_tweets,
          tweets_sensitive: temp_tweets_sensitive
        } = filter_sensitive_tweets(res.data, tweets, tweets_sensitive)

        __unsafe_tweets(
          soft_filter(unsafe_tweets.concat(res.data))
        )
        __tweets(temp_tweets)
        __authors(authors.concat(res.users))
        __medias(medias.concat(res.media))
        __tweets_sensitive(temp_tweets_sensitive)
        __next_token(res.next_token)
        console.log(tweets)
        console.log(next_token)
      }

    } catch (err) {

    }
    __loading(false)
  }

  function reset_states(): void {
    __tweets([])
    __tweets_sensitive([])
    __authors([])
    __medias([])
    __next_token('')
  }

  // AFTER MOUNTED
  useEffect(() => {

    if (props && props.query) {
      __query(props.q)
    }

    if (props && !props.query) {

      // IF PROPS ARE EMPTY
      // SEARCH DEFAULT
      require_twittes()

    }

    // LISTENERS FOR PLAY OR PAUSE VIDEO ON SCROLL
    window.addEventListener("scroll", register_videos_listeners)
    window.addEventListener("resize", register_videos_listeners)

    return () => {
      window.removeEventListener("scroll", register_videos_listeners)
      window.removeEventListener("resize", register_videos_listeners)
      reset_states()
    }

  }, [])

  // LISTEN STATE tweets
  useEffect(() => {
    console.log(tweets.length)
    __loading(false)
  }, [tweets])

  // UPDATE QUERY WHEN PATHNAME CHANGES
  useEffect(() => {
    if (q) {
      reset_states()
      __query(q as string)
    }
  }, [q])

  // RESEARCH WITH NEW QUERY
  useEffect(() => {
    if (query.length) {
      require_twittes()
    }
  }, [query])
  console.log('loading: ', loading)


  return (
    <css.Container>
      <css.Timeline>

        <div id="switch-nsfw">
          <div>
            Content Filter {nsfw ? 'safe' : 'unsafe'}
          </div>
          <Switch
            height={18} handleDiameter={15} width={50}
            onChange={() => __nsfw(!nsfw)} checked={nsfw} />

        </div>
        {query &&
          <h1>Explore: {query}</h1>
        }

        {!query &&
          <css.Create_Post>

            <css.UserContainer src={profile_image} />
            <css.Tools>
              <h2>
                Consuming API of Twitter
        </h2>
            </css.Tools>

          </css.Create_Post>}

        <InfiniteScroll
          dataLength={tweets.length}
          next={require_twittes}
          hasMore={true}
          pullDownToRefresh={true}
          refreshFunction={require_new_tweets}
          loader={<PulseLoader size={15} margin={2} loading={loading} color={'#fff'} />}
          className='infinite-scroll'
        >

          {tweets && nsfw && tweets.map(tweet =>
            <css.Post key={tweet.id} className="post">

              <css.PhotoContainer
                className="user-profile-image"
                onMouseEnter={() => user_popup_visible(
                  'profile_popup_' + tweet.author_id + '_' + tweet.id,
                  true
                )}
                onMouseLeave={() => user_popup_visible(
                  'profile_popup_' + tweet.author_id + '_' + tweet.id,
                  false
                )}
                src={
                  authors.find(
                    user => user.id === tweet.author_id
                  )?.profile_image_url as string
                } >
                <User_Popup
                  pid={tweet.id}
                  user={
                    authors.find(
                      user => user.id === tweet.author_id
                    ) as UserV2}
                />
              </css.PhotoContainer>

              <css.Tools id={"post-content" + tweet.id}>

                <section className="header-of-post">
                  <div>



                    <css.PhotoContainerMobile src={
                      authors.find(
                        user => user.id === tweet.author_id
                      )?.profile_image_url as string
                    } />
                    <a href="#">{
                      authors.find(
                        user => user.id === tweet.author_id
                      )?.username as string
                    }</a>
                  </div>


                </section>

                {tweet.attachments && tweet.attachments.media_keys &&
                  tweet.attachments.media_keys.map(
                    content => {
                      let media = medias.find((o) =>
                        o.media_key === content
                      )

                      if (media?.type && media.type === 'photo') {

                        return <css.Content key={media.media_key} src={media.url} />

                      } else if (media?.type && media.type === 'video') {

                        return <video
                          id={media.media_key}
                          key={media.media_key}
                          muted={true}
                          autoPlay={true}
                          loop={true}
                          controls={true}>

                          <source src={
                            media.variants?.find(vid => vid.bit_rate)?.url
                          }
                            type={
                              media.variants?.find(vid => vid.bit_rate)?.content_type
                            }
                          />

                        </video>

                      }

                    }
                  )
                }

                <p>{tweet.text}</p>

                <Controlers PID={tweet.id} />
              </css.Tools>

            </css.Post>
          )}

          {unsafe_tweets && !nsfw && unsafe_tweets.map(tweet =>
            <css.Post key={tweet.id} className="post">

              <css.PhotoContainer className="user-profile-image" src={
                authors.find(
                  user => user.id === tweet.author_id
                )?.profile_image_url as string
              } />

              <css.Tools id={"post-content" + tweet.id}>

                <section className="header-of-post">
                  <div>



                    <css.PhotoContainerMobile src={
                      authors.find(
                        user => user.id === tweet.author_id
                      )?.profile_image_url as string
                    } />
                    <a href="#">{
                      authors.find(
                        user => user.id === tweet.author_id
                      )?.username as string
                    }</a>
                  </div>


                </section>

                {tweet.attachments && tweet.attachments.media_keys &&
                  tweet.attachments.media_keys.map(
                    content => {
                      let media = medias.find((o) =>
                        o.media_key === content
                      )

                      if (media?.type && media.type === 'photo') {

                        return <css.Content key={media.media_key} src={media.url} />

                      } else if (media?.type && media.type === 'video') {

                        return <video
                          id={media.media_key}
                          key={media.media_key}
                          muted={true}
                          autoPlay={true}
                          loop={true}
                          controls={true}>

                          <source src={
                            media.variants?.find(vid => vid.bit_rate)?.url
                          }
                            type={
                              media.variants?.find(vid => vid.bit_rate)?.content_type
                            }
                          />

                        </video>

                      }

                    }
                  )
                }

                <p>{tweet.text}</p>

                <Controlers PID={tweet.id} />
              </css.Tools>

            </css.Post>
          )}


        </InfiniteScroll>




      </css.Timeline>

      <css.Publi>

      </css.Publi>
    </css.Container>
  )
}

export default Feed

// SOFT FILTER FOR REDUCE SPAMS OF
// UNSAFE TWEETS FILTER
function soft_filter(tweets: Array<TweetV2>): Array<TweetV2> {
  tweets = tweets.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.text === value.text || t.id === value.id ||
      t.attachments?.media_keys === value.attachments?.media_keys
    ))
  )

  return tweets
}