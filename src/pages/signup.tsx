import React, { FC, Fragment } from "react"
import { SEO, Session } from "../components"

type Props = {}

const LoginPage: FC<Props> = () => {
  return (
    <Fragment>
      <SEO title="Register" />
      <Session varient="SIGNUP" />
    </Fragment>
  )
}

export default LoginPage
