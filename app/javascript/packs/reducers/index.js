import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import places, { place } from "./places";
import user from "./user";

const combinedReducers = combineReducers({
  places,
  user,
  routing,
  place,
  form: formReducer,
});

export default combinedReducers;
