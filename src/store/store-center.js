import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"
import authReducer from "./auth"

//$ Create a store with the configureStore method (multiple slices)
const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authReducer,
  },
});

//$ Default export the Redux store
export default store;
