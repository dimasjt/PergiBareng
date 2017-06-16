import React from "react";
import {
  Route,
} from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./components/layouts/Home";
import Auth from "./components/layouts/Auth";
import Header from "./components/layouts/Header";
import Profile from "./components/layouts/Profile";

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
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/profile" component={Profile} />
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
