import React, { Fragment } from "react"
import { Redirect } from "react-router"
import { path } from "src/constants/path"
import { useAuthenticated } from "src/hooks/useAuthenticated"
import PropTypes from "prop-types"

function AuthenticatedGuard({ children }) {
  const authenticated = useAuthenticated()

  if (!authenticated) {
    return <Redirect to={path.login} />
  }

  return <Fragment>{children}</Fragment>
}

AuthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default AuthenticatedGuard
