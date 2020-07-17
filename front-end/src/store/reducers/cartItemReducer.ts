import { ICart } from "../../types/CartReducer";
import { CartItemsActionTypes } from "../../types/Actions";

const initialCartState: ICart = {
  // cartItems: [],
  // subTotal: 0,
  // deliveryCharges: 0,
  // otherCharges: 0,
  // otherChargesForPaymentMethod: 0,
  // totalAmount: 0,

  // userId?: string;
};

const cartItemReducer = (
  state = initialCartState,
  action: CartItemsActionTypes
) => {
  // action.payload gives the cart item to be added/ deleted/ decrease quantity
  switch (action.type) {
    case "ADD_ITEM": // add item
      if (state.cartItems !== undefined) {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      } else {
        return { ...state, cartItems: [action.payload] };
      }
    case "REMOVE_ITEM": // remove item
      if (state.cartItems !== undefined) {
        return {
          ...state,
          cartItems: [
            state.cartItems.filter(
              (item) => item.product.itemId !== action.payload.itemId
            ),
          ],
        };
      } else {
        return state;
      }
    case "REDUCE_QUANTITY": // decrease quantity of an item
      // state.splice(state.indexOf(action.payload), 1);      // this method isn't followed for quantity anymore
      return { cartItems: state };
    default:
      return state;
  }
};

export default cartItemReducer;

// increase/ decrease => change quantity
// buy now & checkout
