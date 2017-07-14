import {
  FETCHED_PLACES,
  FETCHED_PLACE,
  FETCHED_SCHEDULES,
  CREATE_ERROR,
  SHOW_FLASH,
} from "../constants"
import { Axio } from "../Axio"

export function getRecommendedPlaces() {
  return async (dispatch) => {
    try {
      const result = await Axio.get("/places")
      dispatch({
        type: FETCHED_PLACES,
        places: result.data.places,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getOwnPlaces() {
  return async (dispatch) => {
    try {
      const result = await Axio.get("/users/places")
      dispatch({
        type: FETCHED_PLACES,
        places: result.data.places,
      })
    } catch (e) {
      dispatch({
        type: SHOW_FLASH,
        flash: "Failed to fetch places",
      })
    }
  }
}

export function getPlace(slug) {
  return async (dispatch) => {
    try {
      const result = await Axio.get(`/places/${slug}`)

      dispatch({
        type: FETCHED_PLACE,
        place: result.data.place,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getSchedules(slug) {
  return async (dispatch) => {
    try {
      const result = await Axio.get(`places/${slug}/schedules`)

      dispatch({
        type: FETCHED_SCHEDULES,
        schedules: result.data.schedules,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function postPlace(place) {
  return async (dispatch) => {
    try {
      const result = await Axio.post("places", { place })

      dispatch({
        type: SHOW_FLASH,
        flash: result.data.flash,
      })
    } catch (error) {
      dispatch({
        type: CREATE_ERROR,
        flash: error.message,
      })
    }
  }
}
