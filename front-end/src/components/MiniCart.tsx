import React, { useState, useEffect } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ReduxState } from "../store/reducers";
import { useSelector } from "react-redux";

const MiniCart = () => {
  let cart: any = useSelector((state: ReduxState) => state.cart); // get entire cart object saved in Redux state
  let [itemQuantity, setItemQuantity] = useState(0);

  useEffect(() => {
    setItemQuantity(cart.cartItems.length);
  }, [cart.cartItems.length]);

  return (
    <>
      {/* give hover effect to this section */}

      <Badge count={itemQuantity}>
        <ShoppingCartOutlined style={{ fontSize: "28px", color: "#08c" }} />
      </Badge>
    </>
  );
};

export default MiniCart;
