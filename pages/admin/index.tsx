import React from 'react'
import Head from 'next/head'
import { Admin, Login } from 'react-bricks'
import config from '../../react-bricks/config'

const AdminLogin: React.FC = () => {
  return (
    <Admin isLogin>
      <Head>
        <title>{config.title} Login</title>
      </Head>
      <Login />
    </Admin>
  )
}

export default AdminLogin
