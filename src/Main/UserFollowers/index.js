import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BlueLink from "../../UI/BlueLink";
import iconFollowers from "./icon-followers.svg";
import follower1 from "./follower-1.jpg";
import follower2 from "./follower-2.jpg";
import follower3 from "./follower-3.jpg";
import follower4 from "./follower-4.jpg";
import follower5 from "./follower-5.jpg";
import follower6 from "./follower-6.jpg";

const UserFollowers = styled.div`
  margin-bottom: 31px;
`;

const Title = styled.div`
  display: flex;
  aling-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  margin-right: 12px;
`;

const Followers = styled.div``;

const FollowerLink = styled(Link)`
  margin-right: 5px;
`;

const FollowerImg = styled.img``;

const Follower = ({ to, image }) => (
  <FollowerLink to={to}>
    <FollowerImg src={image} />
  </FollowerLink>
);

export default () => (
  <UserFollowers>
    <Title>
      <Icon src={iconFollowers} />
      <BlueLink to="/EveryInteract/Followers">6 Followers you know</BlueLink>
    </Title>
    <Followers>
      <Follower to="/NickBrooks" image={follower1} />
      <Follower to="/Stephen" image={follower2} />
      <Follower to="/RaimondGreen" image={follower3} />
      <Follower to="/Ashley" image={follower4} />
      <Follower to="/TheBestDesign" image={follower5} />
      <Follower to="/LogicalExercises" image={follower6} />
    </Followers>
  </UserFollowers>
);
