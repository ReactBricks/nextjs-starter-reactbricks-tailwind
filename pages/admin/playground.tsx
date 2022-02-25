import React from 'react'
import Head from 'next/head'
import { Admin, Playground } from 'react-bricks'
import config from '../../react-bricks/config'

const AdminPlayground: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>{config.title} Playground</title>
      </Head>
      <Playground />
    </Admin>
  )
}

export default AdminPlayground
