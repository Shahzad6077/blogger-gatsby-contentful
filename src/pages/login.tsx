import React, { FC, Fragment } from "react"
import { SEO, Session } from "../components"

type Props = {}

const LoginPage: FC<Props> = () => {
  return (
    <Fragment>
      <SEO title="Login" />
      <Session varient="LOGIN" />
    </Fragment>
  )
}

export default LoginPage
