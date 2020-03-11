import Link from 'next/link'
import React from 'react'

const Header = () => (
  <header className="pt-8">
    <div className="max-w-4xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          <div className="flex flex-row items-center mb-5 sm:mb-0">
            <img src="/reactbricks-icon.svg" className="w-10" alt="React Bricks" />
            <img src="/nextjs.svg" className="w-16 ml-4" alt="Next.js" />
          </div>
          <h1 className="ml-4 text-xl text-center">
            <Link href="/">
              <a className="text-gray-800 hover:text-pink-700">React Bricks + Next.js + Tailwind</a>
            </Link>
          </h1>
        </div>
        <Link href="/admin"><a>Admin Dashboard &raquo;</a></Link>
      </div>
    </div>
  </header>
)

export default Header