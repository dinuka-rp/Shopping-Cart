import React from "react";
import { Card, Button } from "antd";
import { StarFilled, ShoppingOutlined } from "@ant-design/icons";
import { IProduct } from "../types/Product";

interface Props {
  item: IProduct;
  addItemToCart?: () => void;
}

const { Meta } = Card;

const Product: React.FC<Props> = ({ item, addItemToCart }: Props) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 200 }}
        cover={<img alt="sales-item" src={item.image} />}
      >
        <Meta title={item.title} />

        <div style={{ fontSize: "1.3em" }}>{item.price} LKR</div>
        <div style={{ fontWeight: 350 }}>
          Ratings: {item.rating}/5{" "}
          <StarFilled style={{ fontSize: "1em", color: "#f4eb14" }} />
        </div>

        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <Button
            type="primary"
            shape="round"
            icon={<ShoppingOutlined />}
            onClick={addItemToCart}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Product;
