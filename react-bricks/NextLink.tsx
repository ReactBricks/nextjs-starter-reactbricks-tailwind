import Link from 'next/link'
import { useRouter } from 'next/router'

const NextLink = ({
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

export default NextLink