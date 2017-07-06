import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./components/layouts/Home";
import Auth from "./components/layouts/Auth";
import Header from "./components/layouts/Header";
import Profile from "./components/layouts/Profile";
import PlacePage from "./components/layouts/PlacePage";
import NewPlace from "./components/layouts/NewPlace";

const styles = {
  container: {
    paddingTop: 20,
    width: "94%",
    margin: "0 auto",
  },
};

const Routes = ({ history, ConnectedRouter }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Header />

        <div style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/places/new" component={NewPlace} />
            <Route path="/places/:slug" component={PlacePage} />
            <Route path="/auth" component={Auth} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  );
};

Routes.propTypes = {
  history: PropTypes.object.isRequired,
  ConnectedRouter: PropTypes.func.isRequired,
};

export default Routes;
