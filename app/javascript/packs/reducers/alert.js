import {
  SHOW_FLASH,
  CREATE_ERROR,
  HIDE_FLASH,
} from "../constants"

const initializeState = {
  flash: {
    message: "",
    open: false,
  },
}

function alert(state = initializeState, action) {
  switch (action.type) {
    case CREATE_ERROR:
    case SHOW_FLASH:
      return {
        ...state,
        flash: {
          message: action.flash,
          open: true,
        },
      }
    case HIDE_FLASH:
      return {
        ...state,
        flash: {
          ...state.flash,
          open: false,
        },
      }
    default:
      return state
  }
}

export default alert
