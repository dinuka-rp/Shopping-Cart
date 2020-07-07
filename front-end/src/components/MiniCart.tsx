import React from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const MiniCart = () => {
  return (
    <>
{/* give hover effect to this section */}

    {/* get the number of items from redux state - Have a useEffect hook to change this whenever the redux state changes??*/}
      <Badge count={1}>
        <ShoppingCartOutlined style={{ fontSize: "28px", color: "#08c" }} />
      </Badge>
    </>
  );
};

export default MiniCart;
