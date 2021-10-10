import React from "react"
import Footer from "src/components/Footer/Footer"
import PropTypes from "prop-types"
import HeaderCart from "src/components/HeaderCart/HeaderCart"
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary"

function CartLayout({ children }) {
  return (
    <ErrorBoundary>
      <div>
        <HeaderCart />
        {children}
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
CartLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default CartLayout
