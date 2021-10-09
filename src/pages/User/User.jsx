import React from "react"
import * as S from "./user.style"
import { path } from "src/constants/path"
import { Route, Switch, Redirect } from "react-router"
import Profile from "./Profile/Profile"
import Password from "./Password/Password"
import Purchase from "./Purchase/Purchase"

function User() {
  return (
    <div>
      <S.Container className="container">
        <S.Sidebar>
          <S.Brief>
            <S.BriefAvatar to={path.profile}>
              <img
                src="https://lh3.googleusercontent.com/_ai_xp7eVSguBGgHc3J_RKwy3VrOpuKfEantH9K6DuCvlGF03kP1-CLTerapxRcs7U-___vQI92FLkINQQApnTjlJAkGYTVSMn8gNg2PRzbGS4Hzx_5yhIMWUPOaHYn15xfU0FGKX3LCniTrv0hOc7G24_hcYkdu_qaA3JRFLWMs34_tq50ipNHH_DiKWc08U8_QncoeFQViaYT2uY1tvlInGfKJleFj0YUWabRY4ShZtNLJ6ReKHJOnHMpcVX_PoebDC-FFYo4hI2rdoVf6HTxTlJjiph3a-wHF0FwMFvxB2yhkx9w7_-bCtutw5WCbF4O_IuRoshDBNEz99k3V7iX6SeoTGFsiha0KTVKJPR83DDGxtarl0Wx90_-JqDaw6KkftlD0bq_Mk2jSdt-DqtJrPmHlWkPZe4N9GdbwujmHQFIPGvmgdjGwtvolCP_32FKZyhteHFylZ-cEdYWF-cepmqdxasbegAhnr3Q9nYTSfvMrpXENHp1NQU4mmx5ixmR6XDYYYTnpuTpZ9eEm1Y0NANNmrPp_yewuOi4TIPlQwMnYj3EiYWV6xF8t9qRyF1VL-rA_Zhq-GxuVdO7X5VJOa2kD5WfoLT1rmPE-iwEck2b0N3P3UEEKQBrCL7zh4SDo6SP_bHNgYNwYM5IAnK-E4mgTV4c8E5avhtPisWNqJn9hTNuieWKT86RVT-NccEq5Iz1URtnEqO8fxWmn8NE=w623-h933-no?authuser=0"
                alt=""
              />
            </S.BriefAvatar>

            <S.BriefRight>
              <S.BriefRightUsername>
                quocuvongta1023@gmail.com
              </S.BriefRightUsername>
              <S.BriefEdit to={path.profile}>
                <svg
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: 4 }}
                >
                  <path
                    d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                    fill="#9B9B9B"
                    fillRule="evenodd"
                  />
                </svg>
                Sửa hồ sơ
              </S.BriefEdit>
            </S.BriefRight>
          </S.Brief>
          <S.SidebarMenu>
            <S.SideBarMenuEntry to={path.profile}>
              <S.SideBarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                  alt=""
                />
              </S.SideBarMenuEntryIcon>
              Tài khoản của tôi
            </S.SideBarMenuEntry>
            <S.SideBarMenuEntry to={path.password}>
              <S.SideBarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4"
                  alt=""
                />
              </S.SideBarMenuEntryIcon>
              Đổi mật khẩu
            </S.SideBarMenuEntry>
            <S.SideBarMenuEntry to={path.purchase}>
              <S.SideBarMenuEntryIcon>
                <img
                  src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078"
                  alt=""
                />
              </S.SideBarMenuEntryIcon>
              Đơn mua
            </S.SideBarMenuEntry>
          </S.SidebarMenu>
        </S.Sidebar>
        <S.Main>
          <Switch>
            <Route path={path.user} exact>
              <Redirect to={path.profile} />
            </Route>
            <Route path={path.profile}>
              <Profile />
            </Route>
            <Route path={path.password}>
              <Password />
            </Route>
            <Route path={path.purchase}>
              <Purchase />
            </Route>
            {/*
              cách 2
            <Route path={path.user} exact>
              <Redirect to={match.path + "/profile"} />
            </Route>
            <Route path={match.path + "/profile"}>
              <Profile />
            </Route>
            <Route path={match.path + "/password"}>
              <Password />
            </Route>
            <Route path={match.path + "/purchase"}>
              <Purchase />
            </Route> */}
          </Switch>
        </S.Main>
      </S.Container>
    </div>
  )
}

export default User
