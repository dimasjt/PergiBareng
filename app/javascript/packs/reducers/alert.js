import {
  SHOW_FLASH,
  CREATE_ERROR,
  HIDE_FLASH,
  APOLLO_MUTATION_ERROR,
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
    case APOLLO_MUTATION_ERROR:
      return {
        ...state,
        flash: {
          message: action.error.message,
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
