import {createSlice} from "@reduxjs/toolkit"

//$ Create a state slice for an incrementor value (used in Counter.js)
const initCounter = { cValue: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter", // expected built-in KVP
  initialState: initCounter,
  reducers: {
    // A list of identifier functions
    increment: (state) => {
      state.cValue++;
    },
    decrement: (state) => {
      state.cValue--;
    },
    incrementMore: (state, action) => {
      state.cValue = state.cValue + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer