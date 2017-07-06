import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import places from "./places";
import user from "./user";
import alert from "./alert";

const combinedReducers = combineReducers({
  places,
  user,
  routing,
  alert,
  form: formReducer,
});

export default combinedReducers;
