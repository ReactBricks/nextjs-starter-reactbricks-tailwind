import React from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
//import bricks from 'react-bricks-ui'

import bricks from './bricks'
import pageTypes from './pageTypes'
import { appId, apiKey } from '../credentials.config'

const MyLink = ({
  href,
  children,
  className,
  activeClassName,
  isAdminHeader = true,
}) => {
  const router = useRouter()

  let anchorClassName = ''

  if (router.pathname === href) {
    anchorClassName = activeClassName
  } else {
    anchorClassName = className
  }

  if (isAdminHeader) {
    return (
      <Link href={href}>
        <a className={anchorClassName}>{children}</a>
      </Link>
    )
  }
  return (
    <Link href="/[slug]" as={href}>
      <a className={anchorClassName}>{children}</a>
    </Link>
  )
}

const config = {
  appId,
  apiKey,
  pageTypes,
  bricks,
  logo: '/logo.svg',
  contentClassName: 'content',
  renderLocalLink: MyLink,
  navigate: (path) => Router.push(path),
  appRootElement: '#__next',
}

export default config
