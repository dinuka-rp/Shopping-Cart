import React from "react";
import { ReduxState } from "../store/reducers";
import { useSelector } from "react-redux";
import { ICartItem } from "../types/Product";
import CartItem from "../components/CartItem";

// this will show the shopping cart
const Cart: React.FC = () => {
  let cart: any = useSelector((state: ReduxState) => state.cart); // get entire cart object saved in Redux state
  let cartItems: ICartItem[] = cart.cartItems;

  return (
    <>
      <section>{/* display minicart in header */}</section>

      <section>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <>
              <CartItem
                key={cartItem.product.itemId}
                item={cartItem}

                // product={cartItem.product}
                // quantity={cartItem.quantity}

                // image={cartItem.product.image}
                // title={cartItem.product.title}
                // price={cartItem.product.price}
                // quantity={cartItem.quantity}
              />
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
