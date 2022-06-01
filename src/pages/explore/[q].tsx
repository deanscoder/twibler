import type { GetServerSideProps, NextPage } from 'next'
import * as css from '../../styles/pages/home'
import Head from 'next/head'
import Feed from '../../components/feed'
import { useRouter } from 'next/router'

const Explore: NextPage = (props: any) => {
  const Router = useRouter()

  return (
    <css.Container>
      <Head>
        <title>Explore {props.query} - Twibler</title>
      </Head>

      <Feed
        query={props.query}
      />

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
