// import { IUser } from "../../types/User";

export const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

export const loginSuccess = (username: string, token: string) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: { username: username, token: token },
  };
};

export const loginFailure = () => {
  return {
    type: "LOGIN_FAIURE",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
