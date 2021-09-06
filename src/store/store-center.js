import { createSlice, configureStore } from "@reduxjs/toolkit";

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
// ——————————————————————————————————————————————————————
//$ Create a state slice for Login status (used in Auth.js and Header.js)
const initAuth = { isLoggedIn: false };
const isAuthSlice = createSlice({
  name: "isAuthenticated", // expected built-in KVP
  initialState: initAuth,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const authActions = isAuthSlice.actions;
// ——————————————————————————————————————————————————————
//$ Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: isAuthSlice.reducer,
  },
});

//$ Default export the Redux store
export default store;
