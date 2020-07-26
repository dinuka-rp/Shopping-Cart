import React, { useState, useEffect } from "react";
import { ReduxState } from "../store/reducers";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import HeaderArea from "../components/Header";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { clearCart } from "../store/actions/cartItemAction";

const ItemsSection = styled.div`
  max-height: 90vh;
  overflow-y: auto;
  .noItems {
    padding: 30px;
    text-align: center;
    color: #bbb;
  }
  #clear {
    display: inline-block;
    float: right;
    cursor: pointer;
    margin-right: 20px;
    color: #aaa;
    &:hover {
      color: red;
    }
  }
`;

const TotalSection = styled.div`
  max-height: 90vh;
  border: 1px solid #ccc;
  margin: 12px;
  padding: 20px 30px;
  overflow-y: auto;
  text-align: right;
  .group {
    margin-bottom: 15px;
  }
  .value {
    font-weight: 600;
  }
  .btn {
    text-align: center;
  }
`;

// this will show the shopping cart
const Cart: React.FC = () => {
  const dispatch = useDispatch(); // used to update redux store state
  let cart: any = useSelector((state: ReduxState) => state.cart); // get entire cart object saved in Redux state
  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const clearAllItemsInCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {/* <section>display minicart in header</section> */}
      <HeaderArea />

      <Row>
        <Col xs={24} md={12} xl={16}>
          <ItemsSection>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((cartItem: any) => (
                  <CartItem key={cartItem.product.itemId} item={cartItem} />
                ))}
                <div id={"clear"} onClick={clearAllItemsInCart}>
                  {/* onclick -> reset state of CartReducer, remove save state from persist storage */}
                  {/* https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store */}
                  clear cart
                </div>
              </>
            ) : (
              <div className={"noItems"}>No Items in Cart</div>
            )}
          </ItemsSection>
        </Col>
        <Col xs={24} md={12} xl={8}>
          <TotalSection>
            {/* display total and stuff */}
            <div className={"group"}>
              <div>Subtotal Price</div>
              {/* round to 2 decimal places */}
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
              <div>Other Charges</div>
              <div className={"value"}>$ {cart.otherCharges}</div>
            </div>
            <div className={"group"}>
              <div>Other Charges for Payment Method</div>
              <div className={"value"}>
                $ {cart.otherChargesForPaymentMethod}
              </div>
            </div>
            <div className={"group"}>
              <div>Total Price</div>
              {/* round to 2 decimal places */}
              <div className={"value"}>$ {cart.totalAmount}</div>
            </div>

            <div className={"btn"}>
              <Button type="primary" block>
                Checkout
              </Button>
            </div>
          </TotalSection>

          <div style={{ textAlign: "center", padding: "10px 40px" }}>
            <Link to="/">
              <Button type="default" block>
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Cart;
