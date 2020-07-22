import React from "react";
import { InputNumber } from "antd";
import { ICartItem } from "../types/Product";
import { useDispatch } from "react-redux";
import { alterQuantity } from "../store/actions/cartItemAction";
import { DeleteTwoTone } from "@ant-design/icons";

interface Props {
  item: ICartItem;
}

// Component that displays details of each item in cart with option to alter quantity, remove from cart
const CartItem: React.FC<Props> = ({ item }: Props) => {
  const dispatch = useDispatch(); // used to update redux store state

  const onUpdateItemQuantity = (newItemQuantity: any) => {
    // not getting persisted?????????
    dispatch(alterQuantity(item.product, newItemQuantity));
  };

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
        onChange={onUpdateItemQuantity}
      />

      <DeleteTwoTone twoToneColor="red"  style={{fontSize :'18px'}}/>
    </div>
  );
};

export default CartItem;
