// import { IUser } from "../../types/User";

export const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
    // payload: { username: username },
  };
};

export const loginSuccess = (
  username: string,
  token: string,
  refreshToken: string
) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { username: username, token: token, refreshToken: refreshToken },
  };
};

export const loginFailure = () => {
  return {
    type: "LOGIN_FAIURE",
  };
};

export const renewToken = (token: string, refreshToken: string) => {
  return {
    type: "RENEW_TOKEN",
    payload: { token: token, refreshToken: refreshToken },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
