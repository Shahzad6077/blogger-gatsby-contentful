import React, { FC } from "react"
import { Link } from "gatsby"
import classes from "../blog.module.scss"
import { motion } from "framer-motion"
import BlogHeader from "../Info"

type Props = {
  title: string
  slug: string
  creator: string
  createdAt: Date
}

const BlogLinkCard: FC<Props> = ({ title, slug, creator, createdAt }) => {
  return (
    <motion.div
      className={`${classes.bloglink}`}
      initial="rest"
      animate="anim"
      whileHover="hovver"
    >
      <Link to={`/blog/${slug}`}>
        <BlogHeader
          title={title}
          createdAt={createdAt}
          creator={creator}
          varient="LINK"
        />
      </Link>
    </motion.div>
  )
}

export default BlogLinkCard
