import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import authReducer from "./auth/authReducer";
import crudReducer from "./crud/crudReducer";
import modalReducer from "./modal/modalReducer";
export const store = createStore(
  combineReducers({
    auth: authReducer,
    user: crudReducer,
    shows: modalReducer,
  }),
  applyMiddleware(thunk)
);
