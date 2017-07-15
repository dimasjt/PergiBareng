import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import rootReducer from "../reducers"
import apollo from "../apollo"

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = (history) => {
  const middleware = applyMiddleware(apollo.middleware(), thunk, history)

  return createStore(rootReducer, enhancers, middleware)
}

export default store
