import { FETCH_CHARACTER, FETCH_DETAILS, SET_LOADING } from "./constants";
const initialState = {
  characterData: {},
  loading: false,
};
export function characterReducer(state = initialState, action) {
  const { type, payload: item } = action || {};
  switch (type) {
    case FETCH_CHARACTER:
      return { ...state, characterData: { ...state.characterData, ...item } };
    case SET_LOADING: {
      return { ...state, loading: item };
    }
    default:
      return state;
  }
}

export function detailsReducer(state = initialState, action) {
  const { type, payload: item } = action || {};
  switch (type) {
    case FETCH_DETAILS: {
      return { ...state, details: item };
    }
    case SET_LOADING: {
      return { ...state, loading: item };
    }
    default:
      return state;
  }
}
