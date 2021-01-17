import React, { FC } from "react"
import { Toaster } from "react-hot-toast"
import { Layout } from "./components"
const Index: FC = ({ children }) => {
  return (
    <Layout>
      {children}
      <Toaster />
    </Layout>
  )
}

export default Index
