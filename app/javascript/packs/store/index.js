import { createStore, applyMiddleware, compose } from "redux";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = (history) => {
  const middleware = applyMiddleware(thunk, history);

  return createStore(rootReducer, enhancers, middleware);
};

export default store;
