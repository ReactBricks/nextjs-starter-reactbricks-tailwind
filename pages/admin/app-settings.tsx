import React from 'react'
import Head from 'next/head'
import { Admin, AppSettings } from 'react-bricks'
import config from '../../react-bricks/config'

const AdminAppSettings: React.FC = () => {
  return (
    <Admin>
      <Head>
        <title>{config.title} App Settings</title>
      </Head>
      <AppSettings />
    </Admin>
  )
}

export default AdminAppSettings
