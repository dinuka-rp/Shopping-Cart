import React from "react";
import HeaderArea from "../components/Header";
import Login from "../components/Login";
import styled from "styled-components";

// login and registration can be here

const ProfileForm = styled.div`
  width: 300px;
  margin: auto;
`;

const Profile: React.FC = () => {
  return (
    <>
      <HeaderArea chosenTab="2" />

      <ProfileForm>
        {/* let user toggle between Login and Register here?/ Display user profile here */}

        <Login />
    
      </ProfileForm>
    </>
  );
};

export default Profile;
