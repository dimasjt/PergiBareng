import { ApolloClient, createNetworkInterface } from "react-apollo"

const networkInterface = createNetworkInterface({
  uri: "/api/graphql",
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    const token = localStorage.getItem("token")
    if (token) {
      req.options.headers.authorization = `Bearer ${token}`
    }
    next()
  },
}])

export default new ApolloClient({ networkInterface })
