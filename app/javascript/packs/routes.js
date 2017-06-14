import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "./components/layouts/Home";
import Login from "./components/layouts/Login";
import Header from "./components/layouts/Header";

const routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default routes;
