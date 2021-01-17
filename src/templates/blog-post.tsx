import React, { FC } from "react"
import { Link, PageProps } from "gatsby"
import BlogInfo from "../components/Blog/Info"
import { BlogNodeData } from "../Types/contentful.interface"
import { useAuthContext } from "../Context/Auth"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
type Props = {
  pageContext: BlogNodeData
}

const Index: FC<PageProps & Props> = ({ pageContext }) => {
  const { isAuthenticated } = useAuthContext()
  console.log("isAuthenticated-->", isAuthenticated, pageContext.shortContent)

  const contentKey = isAuthenticated ? "content" : "shortContent"
  return (
    <div className="blog-post">
      <BlogInfo
        title={`${pageContext?.title[0]}`}
        creator={`${pageContext?.creatorName}`}
        createdAt={new Date(pageContext?.createdAt)}
      />
      <h1>{pageContext?.creatorId}</h1>
      {documentToReactComponents(
        JSON.parse(pageContext?.[`${contentKey}`]?.raw)
      )}
      {!isAuthenticated && (
        <Link to="/login">
          <h5>Please login to see full article</h5>
        </Link>
      )}
    </div>
  )
}

export default Index
