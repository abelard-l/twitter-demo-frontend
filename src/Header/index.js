import React from "react";
import styled from "styled-components";
import Top from "./Top";
import profileImage from "./profile-image.jpg";

const Header = styled.header``;

const ProfileInfo = styled.section`
  padding-top: 45px;
  text-align: center;
`;

const ProfileImage = styled.img`
  max-width: 1499px;
  max-height: 380px;
  width: 100%;
`;

export default () => (
  <Header>
    <Top />
    <ProfileInfo>
      <ProfileImage src={profileImage} alt="avatar" />
    </ProfileInfo>
  </Header>
);
