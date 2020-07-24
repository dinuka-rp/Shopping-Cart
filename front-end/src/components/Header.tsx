import React from "react";
import { Input } from "antd";
import MiniCart from "./MiniCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  search?: (searchTerm: string) => void;
}

const HeadArea = styled.div`
  text-align: center;
  border-bottom: 1px solid blue;
  padding-top: 10px;
  padding-bottom: 7px;
`;

const { Search } = Input;

const Header: React.FC<Props> = ({ search }: Props) => {
  return (
    <HeadArea>
      <span style={{ fontSize: "1.2em", float: "left", marginLeft: "40px" }}>
        <span style={{ marginRight: "20px" }}>
          <Link to="/">Home</Link>
        </span>
      </span>

      {/* have boolean condition from props to show/hide search bar */}
      {search && (
        <Search
          placeholder="input search text"
          onSearch={(value) => search(value)}
          style={{ maxWidth: 400 }}
          enterButton
        />
      )}
      <span style={{ fontSize: "1.2em", float: "right", marginRight: "40px" }}>
        <span style={{ marginRight: "20px" }}>
          <Link to="/profile">Profile</Link>
        </span>
        <span>
          <Link to="/cart">
            <MiniCart />
          </Link>
        </span>
      </span>
    </HeadArea>
  );
};

export default Header;
