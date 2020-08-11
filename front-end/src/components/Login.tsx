import React from "react";
// import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { loginUser } from "../services/AuthManagement";

const LoginForm = styled.div`
  padding-top: 30%;
  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;

const Login = () => {
  const onFinish = (values: any) => {
    loginUser(values.username, values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Login Failed");
  };

  return (
    <LoginForm>
      Log in
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <Link to="/register"> */}
          <span className="login-form-forgot">Forgot password</span>
          {/* </Link> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>

          <div>
            Or <Link to="register">register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </LoginForm>
  );
};

export default Login;
