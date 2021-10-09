import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router"
import { path } from "./constants/path"

import RegisterLayout from "./Layouts/RegisterLayout/RegisterLayout"
import MainLayout from "./Layouts/MainLayout/MainLayout"
import UnauthenticatedGuard from "./guard/UnauthenticatedGuard"
import AuthenticatedGuard from "./guard/AuthenticatedGuard"
import CartLayout from "./Layouts/CartLayout/CartLayout"
import Fallback from "./components/Fallback/Fallback"

const Home = lazy(() => import("./pages/Home/Home"))
const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"))
const User = lazy(() => import("./pages/User/User"))
const Login = lazy(() => import("./pages/Auth/Login/Login"))
const Register = lazy(() => import("./pages/Auth/Register/Register"))
const NotFound = lazy(() => import("./pages/NotFound/NotFound"))
const Cart = lazy(() => import("./pages/Cart/Cart"))

function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <MainLayout>
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.productDetail} exact>
        <MainLayout>
          <Suspense fallback={<Fallback />}>
            <ProductDetail />
          </Suspense>
        </MainLayout>
      </Route>
      <Route path={path.cart} exact>
        <AuthenticatedGuard>
          <CartLayout>
            <Suspense fallback={<Fallback />}>
              <Cart />
            </Suspense>
          </CartLayout>
        </AuthenticatedGuard>
      </Route>
      <Route path={path.login} exact>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng nhập">
            <Suspense fallback={<Fallback />}>
              <Login />
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>
      <Route path={path.register} exact>
        <UnauthenticatedGuard>
          <RegisterLayout title="Đăng ký">
            <Suspense fallback={<Fallback />}>
              <Register />
            </Suspense>
          </RegisterLayout>
        </UnauthenticatedGuard>
      </Route>

      <Route path={path.user}>
        <AuthenticatedGuard>
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <User />
            </Suspense>
          </MainLayout>
        </AuthenticatedGuard>
      </Route>

      <Route path={path.notFound}>
        <Suspense fallback={<Fallback />}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>
  )
}

export default Routes
