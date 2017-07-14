import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { AppContainer } from "react-hot-loader";
import "babel-polyfill";

import Main from "./Main";

injectTapEventPlugin();

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(
//     <Main />,
//     document.getElementById("root"),
//   );
// });

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(Main);

if (module.hot) {
  module.hot.accept("./Main", () => {
    render(Main);
  });
}
