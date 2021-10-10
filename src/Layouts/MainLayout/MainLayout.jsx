import React from "react"
import Footer from "src/components/Footer/Footer"
import Header from "src/components/Header/Header"
import PropTypes from "prop-types"
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary"

function MainLayout({ children }) {
  return (
    <ErrorBoundary>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default MainLayout
