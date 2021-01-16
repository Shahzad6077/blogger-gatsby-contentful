import React, { FC } from "react"
import { PageProps } from "gatsby"
import { BlogCard, Layout, SEO } from "../components"

type Props = {}
const IndexPage: FC<PageProps<Props>> = () => (
  <Layout>
    <SEO title="Home" />
    <BlogCard
      title={`React Portals`}
      slug={`react-portal`}
      creator={`M Shahzad Ali`}
    />
    <BlogCard
      title={`React Portals`}
      slug={`react-portal`}
      creator={`M Shahzad Ali`}
    />
    <BlogCard
      title={`React Portals`}
      slug={`react-portal`}
      creator={`M Shahzad Ali`}
    />
  </Layout>
)

export default IndexPage
