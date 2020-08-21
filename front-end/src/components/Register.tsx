import React from "react";
import { Form, Input, Select, Button, message } from "antd";
import HeaderArea from "./Header";
import styled from "styled-components";
import { registerUser } from "../services/AuthManagement";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure, loginRequest } from "../store/actions/UserActions";
// import { QuestionCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const ProfileForm = styled.div`
  width: 450px;
  margin: auto;
  padding-top: 100px;
`;

// alter UI and reposition this component
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch(); // used to update redux store state

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);

    dispatch(loginRequest());

    const res: any = await registerUser(
      values.username,
      values.email,
      values.password,
      values.mobileNum
    );

    console.log(res);

    if (res === "Username & Email have to be provided.") {
      message.error(res);
    } else if (
      res ===
      "This username has already been taken. Please choose another username."
    ) {
      message.error(res);
    } else if (res) {
      message.success("Account Creation Successful");
      // token will be received. dispatch to Redux store
      dispatch(
        loginSuccess(values.username, res.access_token, res.refresh_token)
      );
      window.location.href = "/";
    } else {
      // console.log(res);
      message.error("Account Cration wasn't successful.");
      dispatch(loginFailure());
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="94">+94</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <HeaderArea chosenTab="2" />
      <ProfileForm>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "94",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input a username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="mobileNum"
            label="Mobile Number"
            rules={[
              { required: true, message: "Please input your mobile number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </ProfileForm>
    </>
  );
};

export default RegistrationForm;
