const stateObj = {
  counter: 0,
};
export const incrementReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "incrementMore":
      return { ...state, counter: state.counter + action.amount }; // USE PAYLOAD HERE
  }
  return state;
};
