import React, { useState, useEffect } from "react";
import { ReduxState } from "../store/reducers";
import { useSelector } from "react-redux";
// import { ICartItem } from "../types/Product";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

// this will show the shopping cart
const Cart: React.FC = () => {
  let cart: any = useSelector((state: ReduxState) => state.cart); // get entire cart object saved in Redux state
  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  return (
    <>
      {/* <section>display minicart in header</section> */}
      <Header />
      <section>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem:any) => (
            <>
              <CartItem key={cartItem.product.itemId} item={cartItem} />
            </>
          ))
        ) : (
          <span>No Items in Cart</span>
        )}
      </section>

      <section>{/* display total and stuff */}</section>
    </>
  );
};

export default Cart;
