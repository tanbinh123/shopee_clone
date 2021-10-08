import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { unauthorize } from "src/pages/Auth/auth.slice"
import { path } from "src/constants/path"
import { useEffect } from "react"
import { useAuthenticated } from "src/hooks/useAuthenticated"
import { getCartPurchases } from "src/pages/Cart/cart.slice"

function Authorization() {
  const status = useSelector(state => state.app.status)
  const dispatch = useDispatch()
  const history = useHistory()
  const authenticated = useAuthenticated()

  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      history.push(path.login)
    }
  }, [status, dispatch, history])

  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [authenticated, dispatch])
  return null
}

export default Authorization
