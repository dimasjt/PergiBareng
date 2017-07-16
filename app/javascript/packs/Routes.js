import React from "react"
import {
  Route,
  Switch,
} from "react-router-dom"
import PropTypes from "prop-types"

import HomePage from "./components/pages/HomePage"
import Auth from "./components/layouts/Auth"
import Header from "./components/layouts/Header"
import Snackbar from "./components/layouts/Snackbar"
import Profile from "./components/layouts/Profile"
import PlacePage from "./components/layouts/PlacePage"
import NewPlace from "./components/layouts/NewPlace"
import OwnPlaces from "./components/pages/OwnPlaces"
import EditPlacePage from "./components/pages/EditPlacePage"

const styles = {
  container: {
    paddingTop: 20,
    width: "94%",
    margin: "0 auto",
  },
}

const Routes = ({ history, ConnectedRouter }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />

        <div style={styles.container}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/places" component={OwnPlaces} />
            <Route exact path="/places/new" component={NewPlace} />
            <Route exact path="/places/:slug/edit" component={EditPlacePage} />
            <Route path="/places/:slug" component={PlacePage} />
            <Route path="/auth" component={Auth} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>

        <Snackbar />
      </div>
    </ConnectedRouter>
  )
}

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  ConnectedRouter: PropTypes.func.isRequired,
}

export default Routes
