import {
  FETCHED_PLACES,
  FETCHED_RECOMMENDED_PLACES,
} from "../constants";
import { Axio } from "../Axio";

export function getRecommendedPlaces() {
  return async (dispatch) => {
    try {
      const result = await Axio.get("/places");
      dispatch({
        type: FETCHED_RECOMMENDED_PLACES,
        places: result.data.places,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
