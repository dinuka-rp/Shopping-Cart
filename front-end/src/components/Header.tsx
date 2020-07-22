import React from "react";
import { Input } from "antd";
import MiniCart from "./MiniCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

// serach bar size has to be asjusted to suite phone views
const HeadArea = styled.div`
  text-align: center;
  border-bottom: 1px solid blue;
  padding-top: 10px;
  padding-bottom: 7px;
`;

const { Search } = Input;

const Header: React.FC = () => {
  const searchWidth = 400; // this should be altered based on window-width to make sure that the UI won't be messy on mobile devices

  return (
    <HeadArea>
      <span style={{ fontSize: "1.2em", float: "left", marginLeft: "40px" }}>
        <span style={{ marginRight: "20px" }}>
          <Link to="/">Home</Link>
        </span>
      </span>

      {/* have boolean condition from props to show/hide search bar */}
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        style={{ width: searchWidth }}
        enterButton
      />
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
