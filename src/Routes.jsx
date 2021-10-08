import React from "react"
import { Route, Switch } from "react-router"
import { path } from "./constants/path"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login/Login"
import Register from "./pages/Auth/Register/Register"
import NotFound from "./pages/NotFound/NotFound"
import RegisterLayout from "./Layouts/RegisterLayout/RegisterLayout"
import MainLayout from "./Layouts/MainLayout/MainLayout"
import UnauthenticatedGuard from "./guard/UnauthenticatedGuard"
import AuthenticatedGuard from "./guard/AuthenticatedGuard"
import User from "./pages/User/User"
import ProductDetail from "./pages/ProductDetail/ProductDetail"
import CartLayout from "./Layouts/CartLayout/CartLayout"
import Cart from "./pages/Cart/Cart"

function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
      <Route path={path.productDetail} exact>
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      </Route>
      <Route path={path.cart} exact>
        <AuthenticatedGuard>
          <CartLayout>
            <Cart />
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.login} exact>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Login />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register} exact>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Register />
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.user} exact>
        <AuthenticatedGuard>
          <MainLayout>
            <User />
          </MainLayout>
        </AuthenticatedGuard>
      </Route>

      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes
