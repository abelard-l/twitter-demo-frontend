import React, { Component } from "react";
import styled, { css } from "styled-components";
import bigAvatar from "./big-avatar.png";
import iconJoined from "./icon-joined.svg";
import iconLink from "./icon-link.svg";
import iconLocation from "./icon-location.svg";
import tick from "./tick.png";

const UserInfo = styled.div`
  padding-right: 10px;
  position: relative;
`;

const UserAvatar = styled.img`
  position: absolute;
  top: -180px;
`;

const UserName = styled.div`
  display: flex;
  align-items: flex-end;
  line-height: 22px;
  font-size: 22px;
  color: #14171a;
  padding-top: 45px;
`;

const TickImg = styled.img`
  margin-left: 5px;
`;

const Following = styled.div`
  line-height: 21px;
  font-size: 14px;
  color: #697787;
  margin-top: 5px;
`;

const SmallerGrayText = styled.span`
  line-height: 12px;
  font-size: 12px;
  color: #697787;
`;

const Description = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #14171a;
  text-align: left;
  margin: 10px 0px 10px 0px;
`;

const Country = styled.div`
  display: flex;
  align-items: center;
`;

const WebSiteInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Joined = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 7px;
`;

const GrayText = styled.span`
  line-height: 28px;
  font-size: 14px;
  color: #657786;
`;

const WebSite = styled.a`
  color: #1da1f2;
  text-decoration: none;
  line-height: 28px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
`;

const BlueButton = styled.button`
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 100px;
  padding: 12px 32px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1990d9;
  }
`;

export default () => (
  <UserInfo>
    <UserAvatar src={bigAvatar} />
    <UserName>
      Every Interaction <TickImg src={tick} />
    </UserName>
    <Following>
      @EveryInteract <SmallerGrayText>Follows you</SmallerGrayText>
    </Following>
    <Description>
      UX Design studio focussed problem solving creativity. Design to us is how
      can we make things *work* amazing.
    </Description>
    <Country>
      <Icon src={iconLocation} />
      <GrayText>London, UK</GrayText>
    </Country>
    <WebSiteInfo>
      <Icon src={iconLink} />
      <WebSite href="http://everyinteraction.com">everyinteraction.com</WebSite>
    </WebSiteInfo>
    <Joined>
      <Icon src={iconJoined} />
      <GrayText>Joined May 2008</GrayText>
    </Joined>
    <Buttons>
      <BlueButton>Tweet to</BlueButton>
      <BlueButton>Message</BlueButton>
    </Buttons>
  </UserInfo>
);
