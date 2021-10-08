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
              <S.UserImage src="https://lh3.googleusercontent.com/By-M9VEse9KSlaSkSRkjxl88hXWrUm_ja3cVOgg2GxTr-X6MVw5Qq0MfVSI9sC8LbXr9rBg7z5iq1jCZo9qfxKcMu7-oD-EbeTbN_7nslajMfcKk6tnZkI_5g-230VUgpXUOmd9LLR8kxtVCb2DFN1QZRIiO51kVmEVs0aolNTPGwFXh0_pCL_55iA8q9TZItRPTZueYOqk1ry4j9EAiaBDmgRSjtybD0iDRxWvpK4uhGh1for3BxeXkGd67q5_Hp7f0LzPuOwPnkevnjTDFerKxCDQqbIqyaIxNjnCGBk7Qgj-uU1f7ndIicmOn3DnXhgvs49LH9GKeODK0J_q0-N3t-i75dGzm7qj6yjDenQBcJP4QGyQP4S_nES7gQwlxe4qf0D4LqGTk6PWoVu6ND-PorhcisYpXOo81yed9612gvTbJtINZOFh4fDeQDJTN4MevpfOjEVYyjF-ybCOeDGu2gtZfEuNOk5YF59IBgibAru9WX8yvJXzRQBeqV2SMRWlX1pZtaC6FfXsi8kQileFQz4v8ctqd5sig5M-vbYK2yUu3ey3JwNG5CL4Wc33CM6f7eD8vEGVYbyhndZnmHp6T6QvULcW1FN5VpiryzcW0gJoNvJnh6RfCVJjo5UooSQrk7UpgiejS2OqRJT3Wg0byUMtV8vKuefZ12cwMiU6rLP0JZt6pHZJEUQrVEVI3LgbHrcoxhmzXyv8qBnq3Di4=w745-h933-no?authuser=0" />
              <S.UserName>{profile.name || profile.email}</S.UserName>
              <Popover active={activePopover}>
                <S.UserLink to={path.user}>Tài khoản của tôi</S.UserLink>
                <S.UserLink to="">Đơn mua</S.UserLink>
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
