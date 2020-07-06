import React from "react";
// import Header from "../components/Header";
import Login from "../components/Login";
import styled from "styled-components";

// login and registration can be here

const ProfileForm = styled.div`
  width: 65%;
  margin: auto;
`;

const Profile: React.FC = () => {
  return (
    <>
      {/* <Header /> */}{" "}
      {/* can keep this if user is allowed to login after adding items into the cart and resume shopping */}
      <ProfileForm>
        <Login />
      </ProfileForm>
    </>
  );
};

export default Profile;
