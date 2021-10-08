import React from "react"
import * as S from "./checkbox.style"
import PropTypes from "prop-types"

function Checkbox({ onChange, checked, ...props }) {
  const handleChange = event => {
    const value = event.target.checked
    onChange && onChange(value)
  }
  return (
    <S.Checkbox>
      <S.CheckboxInput
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        {...props}
      />
      <S.CheckboxBox />
    </S.Checkbox>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool
}
export default Checkbox
