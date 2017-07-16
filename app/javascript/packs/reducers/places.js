import {
  FETCHED_RECOMMENDED_PLACES,
  FETCHED_PLACE,
  FETCHED_SCHEDULES,
  FETCHED_PLACES,
  APOLLO_QUERY_RESULT,
} from "../constants"

const initialState = {
  list: [],
  active: null,
}

export default function (state = initialState, action) {
  if (action.type === APOLLO_QUERY_RESULT) {
    switch (action.operationName) {
      case "places":
        return {
          ...state,
          list: action.result.data.places,
        }
      default:
        return state
    }
  } else {
    return state
  }
}

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case FETCHED_RECOMMENDED_PLACES:
//     case FETCHED_PLACES:
//       return {
//         ...state,
//         list: action.places,
//       }
//     case FETCHED_PLACE:
//       return {
//         ...state,
//         list: [],
//         active: {
//           ...action.place,
//           schedules: [],
//         },
//       }
//     case FETCHED_SCHEDULES:
//       return {
//         ...state,
//         active: {
//           ...state.active,
//           schedules: action.schedules,
//         },
//       }
//     default:
//       return state
//   }
// }
