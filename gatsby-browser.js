/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import "./src/Styles/global.scss"
import "firebase/auth"
import AuthProvider from "./src/Context/Auth"
import AppEnhancer from "./src/AppEnhancer"

export const wrapRootElement = ({ element }) => (
  <AuthProvider>
    <AppEnhancer>{element}</AppEnhancer>
  </AuthProvider>
)
