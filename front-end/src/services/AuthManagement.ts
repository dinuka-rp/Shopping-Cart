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
  localStorage.setItem("username", username);

  let postBody = {
    username: username,
    password: password,
  };

  await axios
    .post(loginUserEndpoint, postBody, {})
    .then((response) => {
      // token will be received. dispatch to Redux store
      store.dispatch(
        loginSuccess(
          username,
          response.data.access_token,
          response.data.refresh_token
        )
      );
      message.success("Login Successful");

      // window.location.href = "/";     // redirect to home page (refreshes redux state)
    })
    .catch((error) => {
      localStorage.removeItem(username);
      console.log(error);
      message.error("Login Failed");

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
    email: email,
    password: password,
    mobileNum: mobileNum,
  };

  const res = await axios.post(registerUserEndpoint, postBody, {});

  return res.data;
}
