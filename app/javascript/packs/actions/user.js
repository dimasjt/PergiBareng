import {
  USER_UPDATED,
} from "../constants";
import { setAuthToken } from "../utils/auth";
import { AxioDevise } from "../Axio";

export function updateUser(user) {
  return async (dispatch) => {
    try {
      const result = await AxioDevise.put("/profile", { user });
      const userAttribute = setAuthToken(result.data.auth_token);
      dispatch({
        type: USER_UPDATED,
        user: userAttribute,
      });
    } catch (error) {
      console.log(error)
    }
  };
}
