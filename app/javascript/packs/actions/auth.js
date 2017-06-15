import {
  USER_REGISTERED,
  LOGGED_IN,
} from "../constants";
import { AxioDevise as Axio } from "../Axio";

export function registerUser(user) {
  return async (dispatch) => {
    try {
      let result = await Axio.post("/register", { user });
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  };
}
