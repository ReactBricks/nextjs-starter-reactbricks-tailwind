import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
