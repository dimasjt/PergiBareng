import {
  USER_REGISTERED,
  LOGGED_IN,
  LOGGED_OUT,
} from "../constants";

function user(state = null, action) {
  switch (action.type) {
    case USER_REGISTERED:
      return action.user;
    case LOGGED_IN:
      return action.user;
    case LOGGED_OUT:
      return null;
    default:
      return state;
  }
}

export default user;
