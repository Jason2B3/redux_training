import { createStore } from "redux";
// Create a store, then define your reducer function:
 const store = createStore(counterReducer);

let amber = { counter: 0 };
function counterReducer(state = amber, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
  }
  return;
}

export default store