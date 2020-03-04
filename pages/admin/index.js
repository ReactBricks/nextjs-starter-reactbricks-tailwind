import React from 'react'
import Head from 'next/head'
import { Admin, Login } from 'react-bricks'

const AdminLogin = () => {
  return (
    <Admin isLogin>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </Admin>
  )
}

export default AdminLogin
