const stateObj = {
  showCounter: true,
};
export const toggleReducer = function (state = stateObj, action) {
  switch (action.type) {
    case "toggle":
      return { ...state, showCounter: !state.showCounter };
  }
  return state;
};
