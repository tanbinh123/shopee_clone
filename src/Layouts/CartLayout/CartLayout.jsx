import React from "react"
import Footer from "src/components/Footer/Footer"
import PropTypes from "prop-types"
import HeaderCart from "src/components/HeaderCart/HeaderCart"

function CartLayout({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}
CartLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default CartLayout
