import { combineReducers } from "redux";
import { characterReducer, detailsReducer } from "./reducer";
const rootReducer = combineReducers({
  characterReducer,
  detailsReducer,
});
export default rootReducer;
