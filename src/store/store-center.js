import { createSlice, configureStore } from "@reduxjs/toolkit";

//$ Define your initial state
const initialState = { counter: 0, showCounter: true };

//$ Create your slice or slices
const counterSlice = createSlice({
  name: "Counter", // expected built-in KVP
  initialState, // ES6 shorthand to place obj as a KVP value
  reducers: {
    // A list of identifier functions
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementMore: (state, action) => {
      state.counter = state.counter + action.payload;
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
