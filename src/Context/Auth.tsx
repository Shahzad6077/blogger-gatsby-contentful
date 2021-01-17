import React, { createContext, useContext, useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import {
  User,
  AuthContextType,
  AUTH_CONTEXT_INITIAL_STATE,
  SessionFormValues,
} from "./../Types/auth.interface"

const AuthContext = createContext<AuthContextType>(AUTH_CONTEXT_INITIAL_STATE)

export const useAuthContext = () => useContext<AuthContextType>(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])

  const onLogin: Promise<firebase.auth.UserCredential> | any = ({
    email,
    password,
  }: SessionFormValues) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
  const onSignup: Promise<firebase.auth.UserCredential> | any = ({
    email,
    password,
  }: SessionFormValues) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
  const onLogout: any = () => {
    return firebase.auth().signOut()
  }
  const isAuthenticated = !!user?.uid
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, onLogin, onSignup, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
