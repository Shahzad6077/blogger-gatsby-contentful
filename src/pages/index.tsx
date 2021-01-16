import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogCard } from "../components"

const IndexPage = () => (
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
