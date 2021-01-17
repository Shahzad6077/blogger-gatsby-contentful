import React, { FC, useEffect, useState } from "react"
import { Link, navigate } from "gatsby"
import classes from "./session.module.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { authenticationSchema } from "./../../Validations/sessionValidation"
import { SessionFormValues } from "./../../Types/auth.interface"
import { useAuthContext } from "../../Context/Auth"
import { Spinner } from "./../../Utils"
import toast from "react-hot-toast"
type Props = {
  varient: "LOGIN" | "SIGNUP"
}

const SessionModal: FC<Props> = ({ varient }) => {
  const initialValues: SessionFormValues = { email: "", password: "" }
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)

  const { isAuthenticated, onLogin, onSignup } = useAuthContext()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated])
  // SET HANDLERS
  const onSubmit = async (values: SessionFormValues, { setSubmitting }) => {
    try {
      setLoading(true)
      setSubmitting(false)
      const userCreds =
        varient === "LOGIN" ? await onLogin(values) : await onSignup(values)

      const msg =
        varient === "LOGIN" ? `Login Successfully` : "You Account registered."
      toast.success(msg, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "var(--white)",
        },
      })
    } catch (err) {
      setError(err?.message || "Some error ocurred.")
      toast.error(`There is something wrong!`)
    } finally {
      setLoading(false)
      setSubmitting(true)
    }
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{`${varient}`}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={authenticationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={classes.authForm}>
            <label htmlFor="session-email">Email</label>
            <Field
              id="session-email"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={classes.errorMsg}
            />

            <label htmlFor="session-pw">Password</label>
            <Field
              id="session-pw"
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={classes.errorMsg}
            />
            {error && <div className={classes.errorMsg}>{error}</div>}
            <button
              className="primary-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {loading ? <Spinner /> : `Submit`}
            </button>
          </Form>
        )}
      </Formik>
      <div className={classes.gotolinks}>
        {varient === "SIGNUP" ? (
          <p>
            Have already account ? <Link to="/login">LOGIN</Link>
          </p>
        ) : (
          <p>
            Have no account ? <Link to="/signup">Signup</Link>
          </p>
        )}
      </div>
    </div>
  )
}

export default SessionModal
