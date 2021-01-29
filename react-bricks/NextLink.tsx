import Link from 'next/link'
import { useRouter } from 'next/router'
import { types } from 'react-bricks'

const NextLink: types.RenderLocalLink = ({
  href,
  className,
  activeClassName,
  isAdmin,
  children
}) => {
  const router = useRouter()

  let anchorClassName = ''

  if (router.pathname === href) {
    anchorClassName = activeClassName
  } else {
    anchorClassName = className
  }

  if (isAdmin) {
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

export default NextLink
