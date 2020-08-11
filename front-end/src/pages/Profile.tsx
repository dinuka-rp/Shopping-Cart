import React, { useEffect, useState } from "react";
import HeaderArea from "../components/Header";
import Login from "../components/Login";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../store/reducers";
import { logout } from "../store/actions/UserActions";
// login and registration can be here

const ProfileForm = styled.div`
  width: 300px;
  margin: auto;
`;

const Profile: React.FC = () => {
  let userProfile: any = useSelector((state: ReduxState) => state.user); // get entire user object saved in Redux state
  const dispatch = useDispatch(); // used to update redux store state

  const [token, setToken] = useState<string>(userProfile.token);

  useEffect(() => {
    setToken(userProfile.token);
  }, [userProfile]);

  return (
    <>
      <HeaderArea chosenTab="2" />
      {/* can keep this if user is allowed to login after adding items into the cart and resume shopping */}
      <ProfileForm>
        {/* let user toggle between Login and Register here?/ Display user profile here */}

        {token == null ? (
          <Login />
        ) : (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </ProfileForm>
    </>
  );
};

export default Profile;
