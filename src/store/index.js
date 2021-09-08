import { createStore, combineReducers } from "redux";
import {incrementReducer} from "./increment-reducer"
import {toggleReducer} from "./toggle-reducer"
// Create a store, then define your reducer function:

const rootReducer= combineReducers({
  increment: incrementReducer,
  toggle: toggleReducer,
})

const store = createStore(rootReducer);
export default store;
