import React from "react";
import { Input } from "antd";
import MiniCart from "./Mini-Cart";
import styled from "styled-components";

const NavArea = styled.div``;

const { Search } = Input;

const NavBar = () => {
  return (
    <NavArea>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ width: 400 }}
        enterButton
      />

      <span>Link to login page |</span>
      <span>
        <MiniCart />
      </span>
    </NavArea>
  );
};

export default NavBar;
