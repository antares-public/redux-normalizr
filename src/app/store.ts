import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";

const reducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

export default configureStore({ reducer });
