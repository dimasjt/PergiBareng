import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import Routes from "./Routes";
import store from "./store";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const storeApp = store(routeMiddleware);

export default function Main() {
  return (
    <Provider store={storeApp}>
      <MuiThemeProvider>
        <Routes history={history} ConnectedRouter={ConnectedRouter} />
      </MuiThemeProvider>
    </Provider>
  );
}
