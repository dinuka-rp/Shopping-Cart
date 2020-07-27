import React from "react";
import { InputNumber, Col } from "antd";
import { ICartItem } from "../types/Product";
import { useDispatch } from "react-redux";
import { alterQuantity, removeItem } from "../store/actions/CartItemAction";
import { DeleteTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import { Row } from "antd";

const Item = styled.div`
  border: 1px solid #ddd;
  margin: 12px;
  padding: 10px;
  align-items: center;
  .displayText {
    background-color: red;
  }
  #total {
    font-weight: 600;
    font-size: 1.5em;
  }
  #delete {
    float:right;
    width: fit-content;
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
      <Row>
        <Col xs={12} md={8} lg={8} xl={6}>
          <img
            alt="sales-item"
            src={item.product.image}
            width="80px"
            height="80px"
          />
        </Col>
        <Col xs={12} sm={8} md={8} lg={6} xl={4}>
          {item.product.title}
        </Col>
        <Col xs={24} md={8} lg={6} xl={8}>
          <span>
            $ {item.product.price} x {' '}
            <InputNumber
              min={1}
              defaultValue={item.quantity}
              onChange={onUpdateItemQuantity}
              style={{width:"60px"}}
            />
            {' '}={' '}
          </span>

          <span id="total">
            $ {Math.round(item.product.price * item.quantity * 100) / 100}
          {/* round to 2 decimal places */}
          </span>
        </Col>
        <Col xs={2} md={2} lg={2} xl={4}>
          <div id="delete" onClick={onRemoveItem}>
            <DeleteTwoTone twoToneColor="#eb6565" style={{ fontSize: "18px" }} />
          </div>
        </Col>
      </Row>
    </Item>
  );
};

export default CartItem;
