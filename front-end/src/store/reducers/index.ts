import cartItemReducer  from "./cartItemReducer";
import { combineReducers } from "redux";

// give dynamic name for cart when saving in Redux Persist storage would be enough
// let cartUser = "Dinuka"   // get this from local storage/ redux
// let cartName = `cart_${cartUser}`;

export const rootReducer = combineReducers({
  cart: cartItemReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>;
