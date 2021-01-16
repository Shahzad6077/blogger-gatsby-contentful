import React, { FC } from "react"
import { Link } from "gatsby"
import styles from "./blogcard.module.css"

type Props = {
  title: string
  slug: string
  creator: string
}

const BlogCard: FC<Props> = () => {
  return <div className={`${styles.bgcard}`}>Card</div>
}

export default BlogCard
