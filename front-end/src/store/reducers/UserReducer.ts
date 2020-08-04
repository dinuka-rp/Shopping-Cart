import { IUser } from "../../types/User";

const initialCartState: IUser = {
  userId: "",
  username: "",
  token: "",
};

const UserReducer = (state = initialCartState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload; // save user details
    case "LOGOUT":
      state = initialCartState;
      return state; // delete user details
    default:
      return state;
  }
};

export default UserReducer;
