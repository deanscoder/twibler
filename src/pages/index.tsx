import type { NextPage } from 'next'
import * as css from '../styles/pages/home'
import Head from 'next/head'
import Feed from '../components/feed'

const Home: NextPage = () => {
  return (
    <css.Container>
      <Head>
        <title>Twibler</title>
      </Head>

      <Feed />

    </css.Container>
  )
}

export default Home
