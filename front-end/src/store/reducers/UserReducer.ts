import { IUser } from "../../types/User";

const initialUserState: IUser = {
  username: null,
  token: null,
  refreshToken: null,
  isLoading: false, // this isn't used for now
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
      state.refreshToken = action.payload.refreshToken;

      return { ...state };

    case "LOGIN_FAILURE":
      state.isLoading = false;
      return { ...state };

    case "RENEW_TOKEN":
      state.token = action.payload.token; // access token
      state.refreshToken = action.payload.refreshToken;

      return { ...state };

    case "LOGOUT":
      localStorage.removeItem("username");
      // delete user details
      state = initialUserState;
      
      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
