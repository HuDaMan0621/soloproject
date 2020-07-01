import { createStore } from "redux";
import favReducer from "./reducers";

const store = createStore(
  favReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
