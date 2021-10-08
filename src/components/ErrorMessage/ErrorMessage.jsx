import React from "react"

import { Message } from "./errorMessage.style.js"
import PropsTypes from "prop-types"

function ErrorMessage({ errors, name }) {
  const error = errors[name]
  return <Message>{error && error.message}</Message>
}

ErrorMessage.propTypes = {
  errors: PropsTypes.object,
  name: PropsTypes.string
}

export default ErrorMessage
