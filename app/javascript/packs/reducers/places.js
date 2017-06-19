import {
  FETCHED_PLACES,
  FETCHED_RECOMMENDED_PLACES,
  FETCHED_PLACE,
} from "../constants";

function places(state = [], action) {
  switch (action.type) {
    case FETCHED_RECOMMENDED_PLACES:
      return action.places;
    default:
      return state;
  }
}

export function place(state = null, action) {
  switch (action.type) {
    case FETCHED_PLACE:
      return action.place;
    default:
      return state;
  }
}

export default places;
