import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { path } from "src/constants/path"
import { useAuthenticated } from "src/hooks/useAuthenticated"
import usePoperver from "src/hooks/usePoperver"
import { logout } from "src/pages/Auth/auth.slice"
import Popover from "../Popover/Popover"
import * as S from "./navbar.style"

function Navbar() {
  const authenticated = useAuthenticated()
  const { activePopover, showPopover, hidePopover } = usePoperver()
  const profile = useSelector(state => state.auth.profile)

  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <S.Navbar>
      <S.NavMenu>
        {authenticated ? (
          <li>
            <S.User onMouseEnter={showPopover} onMouseLeave={hidePopover}>
              <S.UserImage src="https://lh3.googleusercontent.com/_OcWhw_eu9daXihAfFvI9RsCtqM6HZUjl0Mu5560DlW4GSO6ACwQVqzorEOC4ofYcZkTDC8lc0vHVq7sjsnNgfd_EyPylY-A42D87KM7_Dx5VgobenCsXkg4rwUN7Wb8F6IYuF9kFCojpzqu6dHAX7e4e3BLyGfUahikzxBbe_QO6WrEqLQiRsLNRnZzq3K3wR6J7Qk4_O-DA657W04pBLDLnRdEFm_sdQxL8OVUY_7tVKUb2q50c7kO2aBLXY5R-DhcL2ADGwXkdelaXcIgP3BozlOpmfCNiDQvTlZvPffRfrc8uBrjkU6FJ7tbLiuWhvnrUDo8u5ou6xiQCTUmavF-ry0SPQcfZGcEVXk56d9biuVDDYLCwXM1dKpzzEESzlh8UHZWh_OPt39xE394F5MlbmOS5x96QC6p62-wJisiFMTEOiOVnWD-sfFVJGF_rrpvWBIa0C9nAfyFshLztZDD9N-6B9DU4VZHoggnfAALJPc3NxEi4U-8Pl2xtX_MFOQUW6LLT47Fd6X3FrWVP_vZbeIxNI2DdN2E3RXI0Gn7OZnFpc4A-_P5qu63nW6lXZjrhzngTjxF8SbIHv4AssFTmogkJq59N2ddJdcqUOOTyuB6nrpEHARxkv1iZ9vrcIkxCP89K2WXowPJXBYY6qr-ReSQmuWZmDEcrH7NEjH6dZ2U9QZpeGI9EZlnW7SU0UMKcstjslFkjXJXAW9AZw0=w623-h933-no?authuser=0" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to={path.purchase}>Đơn mua</S.UserLink>
                <S.UserButton onClick={handleLogout}>Đăng xuất</S.UserButton>
              </Popover>
            </S.User>
          </li>
        ) : (
          <>
            <li>
              <S.NavLink to={path.register}>Đăng ký</S.NavLink>
            </li>
            <li>
              <S.NavLink to={path.login}>Đăng nhập</S.NavLink>
            </li>
          </>
        )}
      </S.NavMenu>
    </S.Navbar>
  )
}

export default Navbar
