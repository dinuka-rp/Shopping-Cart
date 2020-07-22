import React from "react";
import { InputNumber } from "antd";
import { ICartItem } from "../types/Product";
import { useDispatch } from "react-redux";
import { alterQuantity, removeItem } from "../store/actions/cartItemAction";
import { DeleteTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const Item = styled.div`
  border: 1px solid #ccc;
  margin: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  .productImage {
    display: inline-block;
    padding: 5px;
  }
  .displayText {
    display: inline-block;
    margin: 0px 3%;
    // width: 20%;
    text-align: center;
  }
  #total {
    font-weight: 600;
    font-size: 1.5em;
  }
  #delete {
    // float:right;
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

interface Props {
  item: ICartItem;
}

// Component that displays details of each item in cart with option to alter quantity, remove from cart
const CartItem: React.FC<Props> = ({ item }: Props) => {
  const dispatch = useDispatch(); // used to update redux store state

  const onUpdateItemQuantity = (newItemQuantity: any) => {
    dispatch(alterQuantity(item.product, newItemQuantity));
  };

  const onRemoveItem = () => {
    dispatch(removeItem(item.product));
  };

  return (
    <Item>
      {/* give hover effect to this section */}
      <div className="productImage">
        <img
          alt="sales-item"
          src={item.product.image}
          width="80px"
          height="80px"
        />
      </div>
      <div className="displayText">{item.product.title}</div>

      <div className="displayText">
        <span>
          $ {item.product.price} x
          <InputNumber
            min={1}
            defaultValue={item.quantity}
            onChange={onUpdateItemQuantity}
          />
        </span>
        {/* round to 2 decimal places */}
        <span id="total">
          $ {Math.round(item.product.price * item.quantity * 100) / 100}
        </span>
      </div>
      <div className="displayText" id="delete" onClick={onRemoveItem}>
        <DeleteTwoTone twoToneColor="red" style={{ fontSize: "18px" }} />
      </div>
    </Item>
  );
};

export default CartItem;
