import { createStore } from "redux";
import reducers from "./reducer";
export type rootState = ReturnType<typeof reducers>;
const store = createStore(reducers);
export default store;
