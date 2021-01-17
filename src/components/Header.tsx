import { Link } from "gatsby"
import React, { FC } from "react"
import { useAuthContext } from "./../Context/Auth"
import classes from "./components.module.scss"

interface HeaderProps {
  siteTitle: string
}

const Header: FC<HeaderProps> = ({ siteTitle }) => {
  const { isAuthenticated, onLogout } = useAuthContext()

  return (
    <header
      style={{
        background: `var(--purple)`,
        marginBottom: `1.45rem`,
      }}
      className={classes.header}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "var(--maxWidth)",
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <ul>
          {isAuthenticated ? (
            <button className="primary-btn" onClick={onLogout}>
              Logout
            </button>
          ) : (
            <UnAuthLinks />
          )}
        </ul>
      </div>
    </header>
  )
}
const UnAuthLinks: FC = () => {
  return (
    <React.Fragment>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </React.Fragment>
  )
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
