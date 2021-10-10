import React from "react"
import Footer from "src/components/Footer/Footer"
import HeaderRegister from "src/components/HeaderRegister/HeaderRegister"
import PropTypes from "prop-types"
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary"

function RegisterLayout({ children, title }) {
  return (
    <ErrorBoundary>
      <div>
        <HeaderRegister title={title} />
        {children}
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
RegisterLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default RegisterLayout
