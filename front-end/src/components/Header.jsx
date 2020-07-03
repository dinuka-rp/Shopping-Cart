import React from "react";
import { Input } from "antd";
import MiniCart from "./MiniCart";
import styled from "styled-components";

const HeadArea = styled.div`
  text-align: center;
`;

const { Search } = Input;

const Header = () => {
  return (
    <HeadArea>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ width: 400 }}
        enterButton
      />

      <span>Link to Profile page |</span>
      <span>
        <MiniCart />
      </span>
    </HeadArea>
  );
};

export default Header;
