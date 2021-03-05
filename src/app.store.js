import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import AuthReducer from "./components/auth/redux/auth.reducer";
import UsersReducer from "./components/chat/users/redux/users.reducer";

const combineReducerState = {
  authDetails: AuthReducer,
  users: UsersReducer,
};

export default createStore(
  combineReducers(combineReducerState),
  applyMiddleware(thunkMiddleware)
);
