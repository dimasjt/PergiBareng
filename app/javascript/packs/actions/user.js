import _ from "lodash"

import {
  USER_UPDATED,
  SHOW_FLASH,
} from "../constants"
import { setAuthToken } from "../utils/auth"
import { AxioDevise } from "../Axio"

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
}

export function updateUser(user) {
  return async (dispatch) => {
    try {
      const formData = new FormData()
      _.each(user, (val, key) => {
        if (((val !== undefined || val !== "") && key !== "avatar") || (key === "avatar" && val.constructor.name === "File")) {
          formData.append(`user[${key}]`, val)
        }
      })
      const result = await AxioDevise.put("/profile", formData, config)
      const userAttribute = setAuthToken(result.data.auth_token)
      dispatch({
        type: USER_UPDATED,
        user: userAttribute,
      })
      dispatch({
        type: SHOW_FLASH,
        flash: result.data.flash,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
