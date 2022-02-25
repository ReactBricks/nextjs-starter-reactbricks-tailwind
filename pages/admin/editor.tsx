import React from 'react'
import Head from 'next/head'
import { Admin, Editor } from 'react-bricks'
import config from '../../react-bricks/config'

const AdminEditor: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>{config.title} Editor</title>
      </Head>
      <Editor />
    </Admin>
  )
}

export default AdminEditor
