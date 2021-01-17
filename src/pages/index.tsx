import React, { FC } from "react"
import { PageProps, Link, graphql } from "gatsby"
import { BlogLink, SEO } from "../components"
import { BlogNodeData, ContentfulData } from "./../Types/contentful.interface"

type Props = {
  data: ContentfulData
}
const IndexPage: FC<PageProps & Props> = ({ data }) => {
  const blogsArr = data?.allContentfulBlogs.nodes || []
  return (
    <React.Fragment>
      <SEO title="Home" />
      {blogsArr.map((data: BlogNodeData) => (
        <BlogLink
          key={`${data.id}`}
          title={`${data.title[0]}`}
          slug={`${data.title[1]}`}
          creator={`${data.creatorName}`}
          createdAt={new Date(data.createdAt)}
        />
      ))}
      <Link to="/404">go</Link>
    </React.Fragment>
  )
}
export const query = graphql`
  query MyQuery {
    allContentfulBlogs {
      nodes {
        id
        createdAt
        title
        creatorName
      }
    }
  }
`
export default IndexPage
