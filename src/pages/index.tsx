import type { NextPage } from 'next'
import * as css from '../styles/pages/home'
import Head from 'next/head'
import Feed from '../components/feed'
import AboutMe from '../components/about'

const Home: NextPage = () => {

  return (
    <css.Container>
      <Head>
        <title>Twibler Web - Client minimalista de Mini-blogs</title>
        <meta name="description" content="Twibler Web é um client minimalista e elegante para consumir as APIs do Twitter e transformar em mini-blogs, bom pelo menos por enquanto!" />
        <meta name="keywords" content="twibler, twibler web, mini blog, social media minimalista" />
      </Head>

      <Feed />

      <AboutMe />

    </css.Container>
  )
}

export default Home
