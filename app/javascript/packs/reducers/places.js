import {
  FETCHED_PLACES,
  FETCHED_RECOMMENDED_PLACES,
} from "../constants";

function places(state = [], action) {
  switch (action.type) {
    case FETCHED_RECOMMENDED_PLACES:
      return action.places;
    default:
      return state;
  }
}

export default places;
