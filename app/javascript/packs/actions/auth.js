import {
  LOGGED_IN,
  LOGGED_OUT,
  SHOW_FLASH,
} from "../constants"
import { setAuthToken, removeAuthToken } from "../utils/auth"
import { AxioDevise } from "../Axio"

export function register() {
  return (dispatch) => {
    dispatch({
      type: SHOW_FLASH,
      user: "Register success",
    })
  }
}

export function loginUser(user) {
  return async (dispatch) => {
    try {
      const result = await AxioDevise.post("/login", { user })
      const userAttribute = setAuthToken(result.data.auth_token)

      dispatch({
        type: LOGGED_IN,
        user: userAttribute,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function logout() {
  return (dispatch) => {
    removeAuthToken()

    dispatch({
      type: LOGGED_OUT,
    })
  }
}
