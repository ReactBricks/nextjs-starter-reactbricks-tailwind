import Link from 'next/link'
import React from 'react'

const Header = () => (
  <header
    style={{
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 896
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/reactbricks-icon.svg" style={{ width: 40 }} alt="React Bricks" />
          <img
            src="/nextjs.svg"
            style={{ width: 65, marginLeft: '1rem' }}
            alt="Next.js"
          />
          <h1
            style={{
              fontSize: '1.25rem',
              marginLeft: '1rem'
            }}
          >
            <Link href="/">
              <a
                style={{
                  color: `#2d3748`
                }}
              >
                React Bricks + Next.js
              </a>
            </Link>
          </h1>
        </div>
        <Link href="/admin">
          <a>Admin Dashboard &raquo;</a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
