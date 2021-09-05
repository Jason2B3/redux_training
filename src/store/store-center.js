import { createStore } from "redux";
// Create a store, then define your reducer function:
const counterReducer = function (state = { counter: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "increment more":
      return { counter: state.counter + action.amount };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
