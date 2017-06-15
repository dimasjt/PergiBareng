import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : (f => f));

const store = (history) => {
  const middleware = applyMiddleware(logger, thunk, history);

  return createStore(rootReducer, enhancers, middleware);
};

export default store;
