import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import routes from "./routes";

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>{routes()}</div>
      </MuiThemeProvider>
    );
  }
};
