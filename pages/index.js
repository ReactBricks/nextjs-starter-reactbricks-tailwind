import { PageViewer, fetchPage, cleanPage } from 'react-bricks'
import Head from 'next/head'

import config from '../react-bricks/config'
import Layout from '../components/layout'

const Home = ({ page }) => {
  // Clean the received content
  // Removes unknown or not allowed bricks
  const pageOk = cleanPage(page, config.pageTypeSchema, config.blockTypeSchema)

  return (
    <Layout>
      <Head>
        <title>{page.meta.title}</title>
        <meta name="description" content={page.meta.description} />
      </Head>
      <PageViewer page={pageOk} />
    </Layout>
  )
}

export async function getStaticProps() {
  const page = await fetchPage('home', config.apiKey)
  return { props: { page } }
}

export default Home
