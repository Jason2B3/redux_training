import { createStore } from "redux";
// Create a store, then define your reducer function:
const stateObj = {
  counter: 0,
  showCounter: true,
};
const counterReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "toggle":
      return {...state, showCounter: !state.showCounter}
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
