import {
  HIDE_FLASH,
  SHOW_FLASH,
} from "../constants"

export function hideFlash() {
  return async (dispatch) => {
    dispatch({
      type: HIDE_FLASH,
    })
  }
}

export function showFlash(message) {
  return (dispatch) => {
    dispatch({
      type: SHOW_FLASH,
      flash: message,
    })
  }
}
