import React, { FC } from "react"
import { PageProps, Link } from "gatsby"
import { BlogLink, Layout, SEO } from "../components"
import { useAuthContext } from "../Context/Auth"

type Props = {}
const IndexPage: FC<PageProps<Props>> = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <BlogLink
        title={`React Portals`}
        slug={`react-portal`}
        creator={`M Shahzad Ali`}
        createdAt={new Date(2020, 5, 13)}
      />
      <BlogLink
        title={`React Portals`}
        slug={`react-portal`}
        creator={`M Shahzad Ali`}
        createdAt={new Date(2020, 7, 13)}
      />
      <BlogLink
        title={`React Portals`}
        slug={`react-portal`}
        creator={`M Shahzad Ali`}
        createdAt={new Date(2020, 8, 13)}
      />
      <Link to="/404">go</Link>
    </React.Fragment>
  )
}

export default IndexPage
