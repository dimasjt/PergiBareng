import React from "react"
import {
  Route,
  Switch,
} from "react-router-dom"
import PropTypes from "prop-types"

import Header from "./components/layouts/Header"
import Snackbar from "./components/layouts/Snackbar"
import HomePage from "./components/pages/HomePage"
import AuthPage from "./components/pages/AuthPage"
import ProfilePage from "./components/pages/ProfilePage"
import PlacePage from "./components/pages/PlacePage"
import NewPlace from "./components/pages/NewPlace"
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
            <Route path="/auth" component={AuthPage} />
            <Route path="/profile" component={ProfilePage} />
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
