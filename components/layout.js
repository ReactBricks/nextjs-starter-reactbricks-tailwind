import React from 'react'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 896,
        }}
      >
        <main className="content">{children}</main>
        <footer style={{ borderTop: '1px solid #cbd5e0', paddingTop: 10, paddingBottom: 20 }}>
          © {new Date().getFullYear()}{' '}
          <a href="https://www.reactbricks.com">React Bricks</a>, built with
          {` `}
          <a href="https://www.nextjs.org">Next.js</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
