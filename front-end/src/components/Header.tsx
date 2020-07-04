import React from "react";
import { Input } from "antd";
import MiniCart from "./MiniCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeadArea = styled.div`
  text-align: center;
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

      <Link to="/login">Profile</Link>

      <span>
        <MiniCart />
      </span>
    </HeadArea>
  );
};

export default Header;
