import firebase from "gatsby-plugin-firebase"
export type User = null | {
  uid: string
}
export type SessionFormValues = {
  email: string
  password: string
}

export interface AuthContextType {
  user: User
  isAuthenticated: boolean
  onLogin: (SessionFormValues) => Promise<firebase.auth.UserCredential> | null
  onSignup: (SessionFormValues) => Promise<firebase.auth.UserCredential> | null
  onLogout: () => Promise<void> | void
}
export const AUTH_CONTEXT_INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
  onLogin: () => null,
  onSignup: () => null,
  onLogout: () => {},
}
