import { ICart } from "../../types/CartReducer";
// import { CartItemsActionTypes } from "../../types/Actions";

const initialCartState: ICart = {
  cartItems: [],
  subTotal: 0,
  discount: 0,
  deliveryCharges: 0,
  otherCharges: 0,
  otherChargesForPaymentMethod: 0,
  totalAmount: 0,

  // userId?: string;
};

const CartReducer = (state = initialCartState, action: any) => {
  // action.payload gives the cart item to be added/ deleted/ decrease quantity
  switch (action.type) {
    case "ADD_ITEM": // add item
      state.subTotal = state.subTotal + action.payload.product.price;
      state.totalAmount = state.totalAmount + action.payload.product.price;
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_ITEM": // remove item
      // find item in cartItems[]
      let itemToBeRemoved = state.cartItems.find(
        (item) => item.product.itemId === action.payload.itemId
      );

      if (itemToBeRemoved && state.subTotal && state.totalAmount) {
        // reduce price from total
        state.subTotal =
          state.subTotal -
          itemToBeRemoved.product.price * itemToBeRemoved.quantity;
        state.totalAmount =
          state.totalAmount -
          itemToBeRemoved.product.price * itemToBeRemoved.quantity;
      }
      //remove item
      let newCartItems = state.cartItems.filter(
        (item) => item !== itemToBeRemoved
      );
      state.cartItems = newCartItems;
      return { ...state };
    case "ALTER_QUANTITY": // alter quantity of an item
      let alteredItem = state.cartItems.find(
        (item) => item.product.itemId === action.payload.product.itemId
      );
      if (alteredItem) {
        // if the item exists in the cart
        let existingQuantity: number = alteredItem.quantity;
        alteredItem.quantity = action.payload.quantity;

        if(state.subTotal && state.totalAmount){
        // change subTotal & totalAmount
        state.subTotal=(state.subTotal- (alteredItem.product.price*existingQuantity))+(alteredItem.product.price*(alteredItem.quantity));
        state.totalAmount= (state.totalAmount- (alteredItem.product.price*existingQuantity))+(alteredItem.product.price*(alteredItem.quantity));
        }
        
        let alteredIndex: number = state.cartItems.findIndex(
          (item) => item.product.itemId === action.payload.product.itemId
        );
        state.cartItems[alteredIndex] = alteredItem; // replace the new item details in the state
      }
      return { ...state };
    default:
      return state;
  }
};

export default CartReducer;

// buy now & checkout
