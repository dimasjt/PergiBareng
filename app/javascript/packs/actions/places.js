import {
  FETCHED_PLACES,
  FETCHED_RECOMMENDED_PLACES,
  FETCHED_PLACE,
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

export function getPlace(slug) {
  return async (dispatch) => {
    try {
      const result = await Axio.get(`/places/${slug}`);

      dispatch({
        type: FETCHED_PLACE,
        place: result.data.place,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
