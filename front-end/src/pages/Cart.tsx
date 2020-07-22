import React, { useState, useEffect } from "react";
import { ReduxState } from "../store/reducers";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import styled from "styled-components";
import { Row, Col } from "antd";

const ItemsSection = styled.div`
  max-height: 90vh;
  //   background-color: orange;
  overflow-y: auto;
`;
const TotalSection = styled.div`
  max-height: 90vh;
  border: 1px solid #ccc;
  margin: 12px;
  padding: 20px;
  overflow-y: auto;
  text-align: right;
  .group {
    margin-bottom: 15px;
  }
  .value {
    font-weight: 600;
  }
`;

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

      <Row>
        <Col xs={24} md={12} xl={16}>
          <ItemsSection>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem: any) => (
                <>
                  <CartItem key={cartItem.product.itemId} item={cartItem} />
                </>
              ))
            ) : (
              <span>No Items in Cart</span>
            )}
          </ItemsSection>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <TotalSection>
            {/* display total and stuff */}
            <div className={"group"}>
              <div>Subtotal Price</div>
              <div className={"value"}>$ {cart.subTotal}</div>
            </div>
            <div className={"group"}>
              <div>Discount</div>
              <div className={"value"}>$ {cart.discount}</div>
            </div>
            <div className={"group"}>
              <div>Delivery</div>
              <div className={"value"}>$ {cart.deliveryCharges}</div>
            </div>
            <div className={"group"}>
              <div>Total Price</div>
              <div className={"value"}>$ {cart.totalAmount}</div>
            </div>


          </TotalSection>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
