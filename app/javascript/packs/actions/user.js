import _ from "lodash";

import {
  USER_UPDATED,
} from "../constants";
import { setAuthToken } from "../utils/auth";
import { AxioDevise } from "../Axio";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export function updateUser(user) {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      console.log('user', user)
      _.each(user, (val, key) => formData.append(`user[${key}]`, val));
      const result = await AxioDevise.put("/profile", formData, config);
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
