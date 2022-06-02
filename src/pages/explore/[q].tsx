import type { GetServerSideProps, NextPage } from 'next'
import * as css from '../../styles/pages/home'
import Head from 'next/head'
import Feed from '../../components/feed'
import { useRouter } from 'next/router'
import AboutMe from '../../components/about'

const Explore: NextPage = (props: any) => {
  const Router = useRouter()

  return (
    <css.Container>
      <Head>
        <title>Explore {props.query} - Twibler Web</title>
        <meta name="description" content="Explore agora todos os posts recentes por palavra-chave ou hashtags" />
        <meta name="googlebot" content="noindex" />
      </Head>

      <Feed
        query={props.query}
      />

      <AboutMe />

    </css.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { q } = ctx.query
  return {
    props: {
      query: q
    },
  }

}

export default Explore
