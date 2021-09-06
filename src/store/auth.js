import {createSlice} from "@reduxjs/toolkit"

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
export default isAuthSlice.reducer