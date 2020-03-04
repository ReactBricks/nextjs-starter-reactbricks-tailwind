import React from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import pageTypeSchema from './pageTypeSchema'
import blockTypeSchema from './bricks'
import { appId, apiKey } from '../credentials.config'

const MyLink = ({
  href,
  children,
  className,
  activeClassName,
  isAdminHeader = true
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
  pageTypeSchema,
  blockTypeSchema,
  logo: '/logo.svg',
  contentClassName: 'content',
  renderLocalLink: MyLink,
  navigate: path => Router.push(path)
}

export default config
