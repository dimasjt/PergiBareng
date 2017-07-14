import {
  HIDE_FLASH,
} from "../constants"

export function hideFlash() {
  return async (dispatch) => {
    dispatch({
      type: HIDE_FLASH,
    })
  }
}
