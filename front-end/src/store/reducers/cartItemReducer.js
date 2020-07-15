// interface ICart {

// }

const initialCartState = {
  // this is the guest cart
  cart: [{}],       // empty object array
};

const cartItemReducer = (state = initialCartState, action) => {
  // action.payload gives the cart item to be added/ deleted

  switch (action.type) {
    case "ADD": // add item
      return {
        cart: [...state.cart, action.payload],
      };
    case "REMOVE": // remove item
      return {
        cart: [
          ...state.cart.filter((item) => item.itemId !== action.payload.itemId),
        ],
      };
    default:
      return state;
  }
};

export default cartItemReducer;
