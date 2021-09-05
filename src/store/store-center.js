import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// Create a store, then define your reducer function:
const initState = { counter: 0, showCounter: true };
const counterReducer = function (state = initState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "increment more":
      return { counter: state.counter + action.amount };
    case "toggle":
      return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;

// const counter_slice= createS
