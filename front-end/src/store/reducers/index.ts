import cartItemReducer  from "./cartItemReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  cartItems: cartItemReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>;
