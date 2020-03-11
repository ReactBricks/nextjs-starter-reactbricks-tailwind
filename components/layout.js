import React from 'react'

import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto">
        <main className="content">{children}</main>
        <footer className="border-t border-gray-400 pt-3 pb-5">
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
