import React, { FC } from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage: FC = () => {
  return (
    <Layout>
      <SEO title="Page two asd" />
      <h1>Hi from the second page asd</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <button onClick={() => navigate("/")}>Go to Homepafe</button>
    </Layout>
  )
}

export default SecondPage
