import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./components/layouts/Home";
import Auth from "./components/layouts/Auth";
import Header from "./components/layouts/Header";

const styles = {
  container: {
    paddingTop: 20,
    width: "94%",
    margin: "0 auto",
  },
};

const routes = () => {
  return (
    <Router>
      <div>
        <Header />

        <div style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
        </div>
      </div>
    </Router>
  );
};

export default routes;
