import React from "react";
import { Card, Button } from "antd";
import { StarFilled, ShoppingOutlined } from "@ant-design/icons";

interface Props {
  image?: string | undefined;
  title: string;
  price: number;
  rating?: number;
}

const { Meta } = Card;

const SaleItemCard: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="sales-item" src={props.image} />}
      >
        <Meta title={props.title} />

        <div style={{ fontSize: "1.3em" }}>{props.price} LKR</div>
        <div style={{ fontWeight: 350 }}>
          Ratings: {props.rating}/5{" "}
          <StarFilled style={{ fontSize: "1em", color: "#f4eb14" }} />
        </div>

        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <Button type="primary" shape="round" icon={<ShoppingOutlined />}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </>
  );
};

export default SaleItemCard;
