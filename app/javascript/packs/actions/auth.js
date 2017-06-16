import { decode } from "json-web-token";

import {
  USER_REGISTERED,
  LOGGED_IN,
  LOGGED_OUT,
} from "../constants";
import { AxioDevise, Axio } from "../Axio";

export function registerUser(user) {
  return async (dispatch) => {
    try {
      const result = await AxioDevise.post("/register", { user });
      dispatch({
        type: USER_REGISTERED,
        user: result.data,
      });
    } catch (error) {
      console.log(error)
    }
  };
}

export function loginUser(user) {
  return async (dispatch) => {
    try {
      const result = await AxioDevise.post("/login", { user });
      const token = result.data.auth_token;
      const userAttribute = decode(process.env.JWT_SECRET, token).value;

      localStorage.setItem("token", token);

      AxioDevise.defaults.headers.common.Authorization = `Bearer ${token}`;
      Axio.defaults.headers.common.Authorization = `Bearer ${token}`;

      dispatch({
        type: LOGGED_IN,
        user: userAttribute,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("token");

    dispatch({
      type: LOGGED_OUT,
    });
  }
}
