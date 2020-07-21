import { ICart } from "../../types/CartReducer";
// import { CartItemsActionTypes } from "../../types/Actions";

const initialCartState: ICart = {
  cartItems: [],
  subTotal: 0,
  // deliveryCharges: 0,
  // otherCharges: 0,
  // otherChargesForPaymentMethod: 0,
  // totalAmount: 0,

  // userId?: string;
};

const CartReducer = (
  state = initialCartState,
  action: any
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
    case "ALTER_QUANTITY": // alter quantity of an item
      let alteredItem = state.cartItems.find(
        (item) => item.product.itemId === action.payload.product.itemId
      );
      if (alteredItem) {
        // if the item exists in the cart
        alteredItem.quantity = action.payload.quantity;

        let alteredIndex: number = state.cartItems.findIndex(
          (item) => item.product.itemId === action.payload.product.itemId
        );
        state.cartItems[alteredIndex] = alteredItem; // replace the new item details in the state
      }
      return state;
    default:
      return state;
  }
};

export default CartReducer;

// buy now & checkout
