import { ICart } from "../../types/CartReducer";
import { CartItemsActionTypes } from "../../types/Actions";

const initialCartState: ICart = {
  cartItems: [],
  // subTotal: 0,
  // deliveryCharges: 0,
  // otherCharges: 0,
  // otherChargesForPaymentMethod: 0,
  // totalAmount: 0,

  // userId?: string;
};

const CartReducer = (
  state = initialCartState,
  action: CartItemsActionTypes
) => {
  // action.payload gives the cart item to be added/ deleted/ decrease quantity
  switch (action.type) {
    case "ADD_ITEM": // add item
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_ITEM": // remove item
      return {
        ...state,
        cartItems: [
          state.cartItems.filter(
            (item) => item.product.itemId !== action.payload.itemId
          ),
        ],
      };
    case "REDUCE_QUANTITY": // decrease quantity of an item
      // state.splice(state.indexOf(action.payload), 1);      // this method isn't followed for quantity anymore
      return { cartItems: state };
    default:
      return state;
  }
};

export default CartReducer;

// increase/ decrease => change quantity
// buy now & checkout
