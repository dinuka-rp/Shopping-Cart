import CartReducer  from "./CartReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cart: CartReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>;
