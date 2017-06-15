import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import places from "./places";
import user from "./user";

const combinedReducers = combineReducers({
  places,
  user,
  routing,
});

export default combinedReducers;
