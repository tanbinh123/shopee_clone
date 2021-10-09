// {
//   home: "/",
//   login: "/login",
//   register: "/register",
//   user: "/user",
//   product: "/product",
//   productDetail: "/product/:idProduct",
//   cart: "/cart",
//   get profile() {
//     return this.user + "/profile"
//   },
//   password: "/user/password",
//   purchase: "/user/purchase",
//   notFound: "*"
// }

class Path {
  constructor() {
    this.home = "/"
    this.login = "/login"
    this.register = "/register"
    this.user = "/user"
    this.product = "/product"
    this.productDetail = "/product/:idProduct"
    this.cart = "/cart"
    this.profile = this.user + "/profile"
    this.password = this.user + "/password"
    this.purchase = this.user + "/purchase"
    this.notFound = "*"
  }
}

export const path = new Path()

console.log(path.cart)
