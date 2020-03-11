import { PageViewer, fetchPage, fetchPages, cleanPage } from 'react-bricks'
import Head from 'next/head'

import config from '../react-bricks/config'
import Layout from '../components/Layout'

const Page = ({ page }) => {
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

export async function getStaticProps(context) {
  const { slug } = context.params
  const page = await fetchPage(slug.toString(), config.apiKey)
  return { props: { page } }
}

export async function getStaticPaths() {
  const allPages = await fetchPages(config.apiKey)

  const paths = allPages.map(page => ({
    params: { slug: page.slug }
  }))

  return { paths, fallback: false }
}

export default Page
