import CartReducer  from "./CartReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

// give dynamic name for cart when saving in Redux Persist storage would be enough
// let cartUser = "Dinuka"   // get this from local storage/ redux
// let cartName = `cart_${cartUser}`;
let cartName = `cart_guest`;     // when retrieved, refresh


const cartPersistConfig = {
  key: cartName,
  storage,
};

export const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig,CartReducer),
});

export type ReduxState = ReturnType<typeof rootReducer>;
