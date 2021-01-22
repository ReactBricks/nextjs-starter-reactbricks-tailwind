import { useContext } from 'react'
import {
  ReactBricksContext,
  PageViewer,
  fetchPage,
  cleanPage,
} from 'react-bricks'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import config from '../react-bricks/config'
import Layout from '../components/layout'
import ErrorNoKeys from '../components/errorNoKeys'
import ErrorNoHomePage from '../components/errorNoHomePage'

const Home = ({ page, error }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const { pageTypes, bricks } = useContext(ReactBricksContext)

  // TODO-TS: cleanPage better IN / OUT typings
  const pageOk = page ? cleanPage(page, pageTypes, bricks) : null

  return (
    <Layout>
      {pageOk && (
        <>
          <Head>
            <title>{page.meta.title}</title>
            <meta name="description" content={page.meta.description} />
          </Head>
          <PageViewer page={pageOk} />
        </>
      )}
      {error === 'NOKEYS' && <ErrorNoKeys />}
      {error === 'NOPAGE' && <ErrorNoHomePage />}
    </Layout>
  )
}

// TODO-TS fetchPage, fetchPages, usePage etc. should return a typed result

export const getStaticProps: GetStaticProps = async () => {
  if (!config.apiKey) {
    return { props: { error: 'NOKEYS' } }
  }
  try {
    const page = await fetchPage('homse', config.apiKey)
    return { props: { page } }
  } catch {
    return { props: { error: 'NOPAGE' } }
  }
}

export default Home
