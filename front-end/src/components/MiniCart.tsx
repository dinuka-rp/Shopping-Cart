import React from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const MiniCart = () => {
  return (
    <>
    {/* get the number of items from redux state */}
      <Badge count={1}>
        <ShoppingCartOutlined style={{ fontSize: "28px", color: "#08c" }} />
      </Badge>
    </>
  );
};

export default MiniCart;
