import {
  USER_REGISTERED,
  LOGGED_IN,
} from "../constants";

function user(state = null, action) {
  switch (action.type) {
    case USER_REGISTERED:
      return action.user;
      break;
    default:
      return state;
  }
}

export default user;
