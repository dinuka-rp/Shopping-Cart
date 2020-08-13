import { IUser } from "../../types/User";

const initialUserState: IUser = {
  username: null,
  token: null,
  isLoading: false,
};

const UserReducer = (state = initialUserState, action: any) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      // display loading status
      state.isLoading = true;
      return { ...state };

    case "LOGIN_SUCCESS":
      // save user details
      state.isLoading = false;
      state.username = action.payload.username;
      state.token = action.payload.token;
      return { ...state };

    case "LOGIN_FAILURE":
      state.isLoading = false;
      return { ...state };

    case "LOGOUT":
      // delete user details
      state = initialUserState;

      // save the cart separately?

      return state;

    default:
      return state;
  }
};

export default UserReducer;
