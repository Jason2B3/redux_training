import { createSlice, configureStore } from "@reduxjs/toolkit";

//$ Define your initial state
const initialState = { cValue: 0, showCounter: true };

//$ Create your slice or slices
const counterSlice = createSlice({
  name: "counter", // expected built-in KVP
  initialState, // ES6 shorthand to place obj as a KVP value
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

//$ Create a store with the configureStore method
// looks different when multiple slices are present
const store = configureStore({
  reducer: counterSlice.reducer,
});

//$ Enable dispatching Step 1 of 3
export const counterActions = counterSlice.actions;

//$ Default export the Redux store
export default store;
