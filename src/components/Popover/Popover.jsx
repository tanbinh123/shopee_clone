import React from "react"
import PropTypes from "prop-types"
import * as S from "./popover.style"

function Popover({ active, children }) {
  return (
    <>
      {active && (
        <S.Drawer>
          <S.PopoverArow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </>
  )
}

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

export default Popover
