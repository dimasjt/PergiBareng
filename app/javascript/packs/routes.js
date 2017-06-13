import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './components/layouts/Home';
import Login from './components/layouts/Login';

const routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
};

export default routes;
