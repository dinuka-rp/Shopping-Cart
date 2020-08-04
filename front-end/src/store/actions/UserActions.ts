import { IUser } from "../../types/User";

export const login = (user: IUser) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
