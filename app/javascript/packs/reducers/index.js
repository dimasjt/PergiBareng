import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";

import places from "./places";

const combinedReducers = combineReducers({ places, routing });

export default combinedReducers;
