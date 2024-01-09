import {
  FETCH_CHARACTER,
  FETCH_DETAILS,
  SET_LOADING,
  api_url,
} from "./constants";

export function fetchCharacter(page = 1) {
  return async (dispatch) => {
    const url = `${api_url}?page=${page}`;
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: FETCH_CHARACTER,
        payload: {
          [page]: data,
        },
      });
    } catch (err) {
      console.error(err);
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };
}

export function fetchDetails(index) {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOADING,
        payload: true,
      });
      const api = `https://swapi.dev/api/people/${index}`;
      const res = await fetch(api);
      if (!res.ok) {
        throw new Error("Failed to fetch character details");
      }
      const data = await res.json();
      const { name: characterName = "", films = [] } = data || {};
      const promiseArray = films.map(async (ele) => {
        const filmRes = await fetch(ele);
        if (!filmRes.ok) {
          throw new Error("Failed to fetch film details");
        }
        return filmRes.json();
      });

      const filmData = await Promise.all(promiseArray);

      // Dispatch an action with film data if needed
      const movies = filmData.map(({ title }) => title);
      dispatch({
        type: FETCH_DETAILS,
        payload: { characterName, movies },
      });
    } catch (error) {
      console.error("Error fetching details:", error);
      // You may want to dispatch an action to handle the error state
    } finally {
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
    }
  };
}
