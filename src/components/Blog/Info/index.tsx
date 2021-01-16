import React, { FC } from "react"
import { Link } from "gatsby"
import classes from "../blog.module.scss"
import { formatDistanceToNow } from "date-fns"
import { BackArrow } from "../.."

type Props = {
  title: string
  creator: string
  createdAt: Date
  varient?: "LINK" | "INFO"
}

const BlogInfo: FC<Props> = ({ title, creator, createdAt, varient }) => {
  return (
    <div className={`${classes.blog_header}`}>
      <h2>{title}</h2>
      <div className={`${classes.blog_header__info}`}>
        <div>
          <span>{`by ${creator}`}</span>
          <span className={`${classes.blog_header__dot}`} />
          <span>{formatDistanceToNow(createdAt)}</span>
        </div>
        {varient === "LINK" && <BackArrow />}
      </div>
    </div>
  )
}
BlogInfo.defaultProps = {
  varient: "INFO",
}
export default BlogInfo
