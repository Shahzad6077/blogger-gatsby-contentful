import React from "react"
import { motion } from "framer-motion"
import classes from "./ba.module.scss"

const BackArrowAnim = () => {
  return (
    <motion.div
      className={classes.backArrowWrapper}
      // initial="rest"
      // whileHover="hovver"
    >
      <motion.div
        variants={{
          rest: {
            y: "125%",
            opacity: 0,
          },
          hovver: {
            opacity: 1,
            y: "0%",
          },
        }}
        transition={{ duration: 0.4 }}
        style={{ margin: "0px 1rem" }}
      >
        <p>GO TO BLOG</p>
      </motion.div>
      <motion.svg
        variants={{
          rest: {
            x: 0,
            transition: {
              duration: 0.1,
            },
          },

          anim: {
            x: 0,
            transition: {
              duration: 0.1,
            },
          },
          hovver: {
            x: [0, -5, 0],
          },
        }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" />
      </motion.svg>
    </motion.div>
  )
}

export default BackArrowAnim
