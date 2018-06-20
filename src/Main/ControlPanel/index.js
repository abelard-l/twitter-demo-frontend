import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormattedNumber } from "react-intl";
import more from "./more.png";

const ControlPanel = styled.div`
  box-shadow: 0px 2px 2px #b0b8be;
  background: #fff;
  margin-bottom: 9px;
`;

const StatItem = styled(NavLink)`
  border-bottom: ${props =>
    props.active ? "4px solid #1DA1F2" : "4px solid #fff"};
  display: inline-block;
  cursor: pointer;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  padding: 0 15px 5px 15px;
  color: #788a98;
  text-decoration: none;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }
`;

const Text = styled.div`
  color: ${props => (props.active ? "#707E88" : "#788a98")};
  padding: ${props => (props.active ? "3px 0px 0px 0px" : "0px 0px 3px 0px")};
`;

const Amount = styled.div`
  color: ${props => (props.active ? "#1DA1F2" : "#788a98")};
  font-size: 18px;
  padding: ${props => (props.active ? "0px" : "0px 0px 0px 0px")};
  font-weight: bold;
`;

const StatInfos = styled.div`
  display: flex;
  align-items: center;
`;

const StatInfo = ({ to, amount, active, children }) => (
  <StatItem active={active} exact to={to}>
    <Text active={active}>{children}</Text>
    <Amount active={active}>
      <FormattedNumber value={amount} />
    </Amount>
  </StatItem>
);

const FollowBlock = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FollowBtn = styled.button`
  background: transparent;
  border: 1px solid #1da1f2;
  box-sizing: border-box;
  border-radius: 100px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  padding: 9px 27px;
  color: #1da1f2;
  font-weight: bold;
  margin-right: 18px;

  &:hover {
    background: #e8f5fd;
  }
`;

const MoreImg = styled.img``;

export default () => (
  <ControlPanel>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <StatInfos>
            <StatInfo to="/EveryInteract/" amount={8058} active="true">
              Tweets
            </StatInfo>
            <StatInfo to="/EveryInteract/following" amount={721}>
              Following
            </StatInfo>
            <StatInfo to="/EveryInteract/followers" amount={1815}>
              Followers
            </StatInfo>
            <StatInfo to="/EveryInteract/likes" amount={460}>
              Likes
            </StatInfo>
            <StatInfo to="/EveryInteract/lists" amount={2}>
              Lists
            </StatInfo>
          </StatInfos>
        </div>
        <div className="col-xs-3">
          <FollowBlock>
            <FollowBtn>Follow</FollowBtn>
            <MoreImg src={more} />
          </FollowBlock>
        </div>
      </div>
    </div>
  </ControlPanel>
);
