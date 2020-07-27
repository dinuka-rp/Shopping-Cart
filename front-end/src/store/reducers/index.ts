import CartReducer from "./CartReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>;
