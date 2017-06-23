import {
  USER_UPDATED,
} from "../constants";

export function updateUser(user) {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_UPDATED,
        user,
      });
    } catch (error) {
      console.log(error)
    }
  };
}
