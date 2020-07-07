import React from "react";
import { Card, Button } from "antd";
import { StarFilled, ShoppingOutlined } from "@ant-design/icons";

interface Product {
  itemId: string;
  image?: string | undefined;
  // title: string;
  // price: number;
  rating?: number;
}

interface Props {
  // item: Product;
  addItemToCart?: () => void;

  // itemId?: string; // to identify items uniquely in DB
  image?: string | undefined;
  title: string;
  price: number;
  rating?: number;
}

const { Meta } = Card;

const SalesProduct: React.FC<Props> = ({
  // item,
  addItemToCart,

  image,
  title,
  price,
  rating,
}: Props) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 200 }}
        cover={<img alt="sales-item" src={image} />}
      >
        <Meta title={title} />

        <div style={{ fontSize: "1.3em" }}>{price} LKR</div>
        <div style={{ fontWeight: 350 }}>
          Ratings: {rating}/5{" "}
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

export default SalesProduct;
