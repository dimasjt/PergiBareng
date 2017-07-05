import {
  USER_REGISTERED,
  LOGGED_IN,
  LOGGED_OUT,
  USER_UPDATED,
} from "../constants";

function user(state = null, action) {
  switch (action.type) {
    case USER_REGISTERED:
    case LOGGED_IN:
    case USER_UPDATED:
      return action.user;
    case LOGGED_OUT:
      return null;
    default:
      return state;
  }
}

export default user;
