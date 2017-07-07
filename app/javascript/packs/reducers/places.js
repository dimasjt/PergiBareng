import {
  FETCHED_RECOMMENDED_PLACES,
  FETCHED_PLACE,
  FETCHED_SCHEDULES,
} from "../constants";

const initialState = {
  list: [],
  active: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHED_RECOMMENDED_PLACES:
      return {
        ...state,
        list: action.places,
      };
    case FETCHED_PLACE:
      return {
        ...state,
        list: [],
        active: {
          ...action.place,
          schedules: [],
        },
      };
    case FETCHED_SCHEDULES:
      return {
        ...state,
        active: {
          ...state.active,
          schedules: action.schedules,
        },
      };
    default:
      return state;
  }
}
