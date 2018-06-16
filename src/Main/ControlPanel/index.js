import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FormattedNumber } from "react-intl";
import more from "./more.png";

const ControlPanel = styled.div`
  box-shadow: 0px 2px 2px #b0b8be;
  background: #fff;
`;

const StatItem = styled.div`
  border-bottom: ${props =>
    props.active ? "4px solid #1DA1F2" : "4px solid #fff"};
  display: inline-block;
  cursor: pointer;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  padding: 0 15px 5px 15px;
  color: #788a98;

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

const StatInfo = ({ name, amount, active = false }) => (
  <StatItem active={active}>
    <Text active={active}>{name}</Text>
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
            <StatInfo name={"Tweets"} amount={8058} active={true} />
            <StatInfo name={"Following"} amount={721} />
            <StatInfo name={"Followers"} amount={1815} />
            <StatInfo name={"Likes"} amount={460} />
            <StatInfo name={"Lists"} amount={2} />
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
