import {
  USER_REGISTERED,
  LOGGED_IN,
  LOGGED_OUT,
} from "../constants"
import { setAuthToken, removeAuthToken } from "../utils/auth"
import { AxioDevise } from "../Axio"

export function registerUser(user) {
  return async (dispatch) => {
    try {
      const result = await AxioDevise.post("/register", { user })
      dispatch({
        type: USER_REGISTERED,
        user: result.data,
      })
    } catch (error) {
      console.log(error)
    }
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
