import React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
// import { Provider } from "react-redux";
import { createBrowserHistory } from "history"
import { ConnectedRouter, routerMiddleware } from "react-router-redux"
import { decode } from "json-web-token"
import { ApolloProvider } from "react-apollo"

import { LOGGED_IN } from "./constants"
import { AxioDevise, Axio } from "./Axio"
import apollo from "./apollo"

import Routes from "./Routes"
import store from "./store"

const history = createBrowserHistory()
const routeMiddleware = routerMiddleware(history)
const storeApp = store(routeMiddleware)

export default class Main extends React.Component {
  componentWillMount() {
    const token = localStorage.getItem("token")
    if (token) {
      this.setHeaders(token)
      this.checkAuth(token)
    }
  }
  setHeaders(token) {
    AxioDevise.defaults.headers.common.Authorization = `Bearer ${token}`
    Axio.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  checkAuth(token) {
    const user = decode(process.env.JWT_SECRET, token).value
    storeApp.dispatch({ type: LOGGED_IN, user })
  }
  render() {
    return (
      <ApolloProvider store={storeApp} client={apollo}>
        <MuiThemeProvider>
          <Routes history={history} ConnectedRouter={ConnectedRouter} />
        </MuiThemeProvider>
      </ApolloProvider>
    )
  }
}
