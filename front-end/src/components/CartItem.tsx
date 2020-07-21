import React from "react";
import { InputNumber } from "antd";
import { ICartItem } from "../types/Product";

interface Props {
  item: ICartItem;
  //   title: string;
  //   price: number;
  //   image?: string | undefined;
  //   quantity: number;
}

// Component that displays details of each item in cart with option to alter quantity, remove from cart
const CartItem: React.FC<Props> = ({
  // image,
  // title,
  // price,
  item,
}: Props) => {
  return (
    <div>
      {/* give hover effect to this section */}
      <div>
        <img alt="sales-item" src={item.product.image} />
      </div>
      <div>{item.product.title}</div>

      <div>{item.product.price} x </div>

      {/* might need to have the updateItemQuantity method in parent component */}
      <InputNumber
        min={1}
        defaultValue={item.quantity}
        // onChange={onUpdateItemQuantity}
      />
    </div>
  );
};

export default CartItem;
