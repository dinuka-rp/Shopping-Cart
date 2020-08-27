import { ICart } from "../../types/CartReducer";
import { ICartItem } from "../../types/Product";


// give dynamic name for cart when saving in Redux Persist storage would be enough
// let cartUser = localStorage.getItem("username"); // get this from local storage/ redux - will be available only after reloading persisted store
// let cartName;
// if (localStorage.getItem("username")) {
//   cartName = `cart_${cartUser}`;
// } else {
  // cartName = `cart_guest`;
// }

// have state as, to have different cart for each user
// Cart:{
// Guest_Cart: [ cartItems: [],
// subTotal: 0,
// discount: 0,
// deliveryCharges: 0,
// otherCharges: 0,
// otherChargesForPaymentMethod: 0,
// totalAmount: 0,
// ]
// ,
// $username_Cart: [ cartItems: [],
// subTotal: 0,
// discount: 0,
// deliveryCharges: 0,
// otherCharges: 0,
// otherChargesForPaymentMethod: 0,
// totalAmount: 0,
// ]
// }


const initialCartState: ICart = {
  cartItems: [],
  subTotal: 0,
  discount: 0,
  deliveryCharges: 0,
  otherCharges: 0,
  otherChargesForPaymentMethod: 0,
  totalAmount: 0,

  // userId?: "";
};

function calculateSubTotal(cartItems: ICartItem[]) {
  return cartItems.reduce((sum: number, item: ICartItem) => {
    return sum + item.quantity * item.product.price;
  }, 0);
}

function calculateTotalAmount(cart: ICart) {
  return (
    cart.deliveryCharges +
    cart.otherCharges +
    cart.otherChargesForPaymentMethod +
    cart.subTotal -
    cart.discount
  );
}

const CartReducer = (state = initialCartState, action: any) => {
  // action.payload gives the cart item to be added/ deleted/ decrease quantity
  switch (action.type) {
    case "ADD_ITEM": // add item
      state.cartItems = [...state.cartItems, action.payload];

      state.subTotal = calculateSubTotal(state.cartItems);
      state.totalAmount = calculateTotalAmount(state);
      return { ...state };
      // return { ...state, "abcdef":"hsf" };

    case "REMOVE_ITEM": // remove item
      // find item in cartItems[]
      let itemToBeRemoved = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );

      //remove item
      let newCartItems = state.cartItems.filter(
        (item) => item !== itemToBeRemoved
      );


      state.cartItems = newCartItems;

      // if (state.subTotal && state.totalAmount) {
        state.subTotal = calculateSubTotal(state.cartItems);
        state.totalAmount = calculateTotalAmount(state);
      // }

      return { ...state };

    case "ALTER_QUANTITY": // alter quantity of an item
      let alteredItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (alteredItem) {
        // if the item exists in the cart

        alteredItem.quantity = action.payload.quantity;

        let alteredIndex: number = state.cartItems.findIndex(
          (item) => item.product.id === action.payload.product.id
        );
        state.cartItems[alteredIndex] = alteredItem; // replace the new item details in the state

        // if (state.subTotal && state.totalAmount) {
          state.subTotal = calculateSubTotal(state.cartItems);
          state.totalAmount = calculateTotalAmount(state);
        // }
      }
      return { ...state };

    case "CLEAR_CART": // clear entire cart (reset cart)
      state = initialCartState;
      return {...state};
      
    default:
      return state;
  }
};

export default CartReducer;
