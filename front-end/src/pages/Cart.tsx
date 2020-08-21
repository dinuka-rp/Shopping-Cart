import React, { useState, useEffect } from "react";
import { ReduxState } from "../store/reducers";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import HeaderArea from "../components/Header";
import styled from "styled-components";
import { Row, Col, Button, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { clearCart } from "../store/actions/CartItemAction";
import { orderItems } from "../services/OrderManagement";
import { ICartItem } from "../types/Product";
import { ICartDetailsItem } from "../types/Order";

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

  const onCheckout = async () => {
    // send api request to checkout

    let checkoutCart: ICartDetailsItem[] = [];

    await cartItems.forEach((item: ICartItem) => {
      let product:any = item.product;
      const { image, rating, availableQuantity, ...orderProduct } = product;      // avilableQuantity is anyway received from the backend and kept in product although not defined in IProduct

      checkoutCart.push({
        ...orderProduct,
        quantity: item.quantity,
      });
    });

    // console.log(checkoutCart);

    const res: string = await orderItems({
      subTotal: cart.subTotal.toFixed(2),
      discount: cart.discount.toFixed(2),
      delivery: cart.deliveryCharges.toFixed(2),
      otherCharges: cart.otherCharges.toFixed(2),
      otherChargesForPaymentMethod: cart.otherChargesForPaymentMethod.toFixed(
        2
      ),
      totalAmount: cart.totalAmount.toFixed(2),
      cartDetails: checkoutCart,
    });

    if (res === "The new order was recorded in the database") {
      message.success({
        content: "Your order has been placed.",
        className: "custom-class",
        style: {
          marginTop: "20vh",
        },
      });

      // clear the cart
      clearAllItemsInCart();
    }
  };

  return (
    <>
      {/* display minicart in header */}
      <HeaderArea chosenTab="3" />
      {/* break this into two components?? */}
      <Row>
        <Col xs={24} md={12} xl={16}>
          <ItemsSection>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((cartItem: any) => (
                  <CartItem key={cartItem.product.id} item={cartItem} />
                ))}
                <Popconfirm
                  title="Are you sure that you want to clear the entire cart?"
                  onConfirm={clearAllItemsInCart}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <div id={"clear"}>clear cart</div>
                </Popconfirm>
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
              <div className={"value"}>$ {cart.subTotal.toFixed(2)}</div>
            </div>
            <div className={"group"}>
              <div>Discount</div>
              <div className={"value"}>$ {cart.discount.toFixed(2)}</div>
            </div>
            <div className={"group"}>
              <div>Delivery</div>
              <div className={"value"}>$ {cart.deliveryCharges.toFixed(2)}</div>
            </div>
            <div className={"group"}>
              <div>Other Charges</div>
              <div className={"value"}>$ {cart.otherCharges.toFixed(2)}</div>
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
              <div className={"value"}>$ {cart.totalAmount.toFixed(2)}</div>
            </div>

            <div className={"btn"}>
              <Button type="primary" block onClick={onCheckout}>
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
