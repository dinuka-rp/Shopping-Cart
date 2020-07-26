import React from "react";
import { Input, Layout, Menu } from "antd";
import MiniCart from "./MiniCart";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  search?: (searchTerm: string) => void;
  chosenTab: string;      // used to display the selected tab in light blue
}

const HeadArea = styled.div`
  // text-align: center;
  // border-bottom: 1px solid blue;
  // padding-top: 10px;
  // padding-bottom: 7px;
`;

const { Search } = Input;
const { Header, Content } = Layout;

const HeaderArea: React.FC<Props> = ({ search, chosenTab }: Props) => {
  return (
    <HeadArea>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[chosenTab]} // pass this in from parent component
            style={{ display: "flex" }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            {search && (
              <Content
                style={{
                  display: "inline-block",
                  flexGrow: 1,
                  textAlign: "center",
                }}
              >
                <Search
                  placeholder="input search text"
                  onSearch={(value) => search(value)}
                  style={{ maxWidth: 400, minWidth: 200, paddingTop: "15px" }}
                  enterButton
                  allowClear
                />
              </Content>
            )}

            <Menu.Item key="2" style={{ float: "right" }}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="3" style={{ float: "right" }}>
              <Link to="/cart">
                <MiniCart />
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </HeadArea>
  );
};

export default HeaderArea;
