import React from "react";
import { Input } from "antd";
import MiniCart from "./MiniCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeadArea = styled.div`
  text-align: center;
  border-bottom: 1px solid blue;
  padding-top: 10px;
  padding-bottom: 7px;
`;

const { Search } = Input;

const Header: React.FC = () => {
  return (
    <HeadArea>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ width: 400 }}
        enterButton
      />
      <span style={{ fontSize: "1.2em", float: "right", marginRight: "40px" }}>
        <span style={{ marginRight: "20px" }}>
          <Link to="/profile">Profile</Link>
        </span>
        <span>
          <MiniCart />
        </span>
      </span>
    </HeadArea>
  );
};

export default Header;
