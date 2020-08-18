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
      // token will be received. dispatch to Redux store
      store.dispatch(loginSuccess(username, response.data.access_token));
      window.location.href = "/";
      message.success("Login Successful");
    })
    .catch((error) => {
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

  store.dispatch(loginRequest());

  const res = await axios.post(registerUserEndpoint, postBody, {});

  // if (res === "error") {
  //   console.log(error);
  //   store.dispatch(loginFailure());
  // }
  
  // use res.data to check if the message received is successful, then do the actions that follow (without having it in a callback??)
  return res.data;

}
