import axios from "axios";
import { loginUserEndpoint, registerUserEndpoint } from "../endpoints";
import { message } from "antd";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../store/actions/UserActions";
import { store } from "../index";

// methods for user login & registering

// login user
export async function loginUser(username: string, password: string) {
  store.dispatch(loginRequest());

  let postBody = {
    username: username,
    password: password,
  };

  await axios
    .post(loginUserEndpoint, postBody, {})
    .then((response) => {
      message.success("Login Successful");
      // token will be received. dispatch to Redux store
      store.dispatch(loginSuccess(username, response.data.access_token));
      window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);

      store.dispatch(loginFailure());
    });
  // .then(() => {
  //   // always executed
  // })
}

// register user
// -- endpoint needs to be created in the backend
export async function registerUser(
  username: string,
  password: string,
  email: string,
  mobileNum: string
) {
  let postBody = {
    username: username,
    password: password,
    email: email,
    mobileNum: mobileNum,
  };

  await axios
    .post(registerUserEndpoint, postBody, {})
    .then((response) => {
      message.success("Account Creation Successful");
      // token will be received. dispatch to Redux store
      store.dispatch(loginSuccess(username, response.data.access_token));
      //   window.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
  // .then(() => {
  //   // always executed
  // })
}
