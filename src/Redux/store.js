import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import rootReducer from "./rootreducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const config = {
  key: "r",
  storage,
};
const finalReducer = persistReducer(config, rootReducer);
const store = createStore(
  finalReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
