import React from "react";
import { Card } from "antd";

interface Props {
  img?: string | null;
  // title: string;
  // price: number;
  rating?: number;
}

const { Meta } = Card;

const SaleItemCard: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </>
  );
};

export default SaleItemCard;
