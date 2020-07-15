// interface ICart {

// }

const cartItemReducer = (state = {cart:[]}, action) => {
  // action.payload gives the cart item to be added/ deleted

  switch (action.type) {
    case "ADD": // add item
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE": // remove item
      return state.filter((item) => item !== action.payload);
    default:
      return state;
  }
};

export default cartItemReducer;
