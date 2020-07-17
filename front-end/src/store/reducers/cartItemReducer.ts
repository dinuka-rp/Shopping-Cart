import { IProduct } from "../../types/Product";
import { CartItemsActionTypes } from "../../types/Actions";

const initialCartState: IProduct[] = [];

const cartItemReducer = (
  state = initialCartState,
  action: CartItemsActionTypes
) => {
  // action.payload gives the cart item to be added/ deleted/ decrease quantity
  switch (action.type) {
    case "ADD_ITEM": // add item
      return [...state, action.payload];
    case "REMOVE_ITEM": // remove item
      return [...state.filter((item) => item.itemId !== action.payload.itemId)];
    case "REDUCE_QUANTITY": // decrease quantity of an item
      state.splice(state.indexOf(action.payload),1);
      return state;
    default:
      return state;
  }
};

export default cartItemReducer;
