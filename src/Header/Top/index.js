import React, { Component } from "react";
import styled, { css } from "styled-components";
import avatar from "./avatar.png";
import iconHome from "./icon-home.svg";
import iconMessages from "./icon-messages.svg";
import iconMoments from "./icon-moments.svg";
import iconNotifications from "./icon-notifications.svg";
import magnifier from "./magnifier.svg";
import twitterLogo from "./twitter-logo.svg";

const Top = styled.section`
  padding-top: 5px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const MenuItemWrap = styled.div`
  align-items: center;
  display: flex;
  font-size: 13px;
  color: #667580;
  margin-right: 20px;
`;

const Text = styled.span`
  margin-left: 6px;
`;

const MenuItem = ({ text, image }) => (
  <MenuItemWrap>
    <img alt={text} src={image} /> <Text>{text}</Text>
  </MenuItemWrap>
);

const Logotype = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TwitterLogo = styled.img``;

const SearchPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Search = styled.input`
  background: url(${magnifier}) no-repeat 96% 50% #f5f8fa;
  border: 1px solid #e6ecf0;
  box-sizing: border-box;
  border-radius: 100px;
  font-size: 12px;
  color: #687b8a;
  flex-basis: 50%;
  padding: 8px 25px 9px 11px;
  margin-right: 18px;
`;

const UserLogo = styled.img`
  margin-right: 18px;
`;

const Tweet = styled.button`
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 100px;
  padding: 8px 22px;
  border: none;
  cursor: pointer;
`;

export default () => (
  <Top>
    <div className="container">
      <div className="row middle-xs between-xs">
        <Menu>
          <MenuItem text={"Home"} image={iconHome} />
          <MenuItem text={"Moments"} image={iconMoments} />
          <MenuItem text={"Notifications"} image={iconNotifications} />
          <MenuItem text={"Messages"} image={iconMessages} />
        </Menu>

        <Logotype>
          <TwitterLogo src={twitterLogo} />
        </Logotype>

        <SearchPanel>
          <Search placeholder="Search Twitter" />
          <UserLogo src={avatar} />
          <Tweet>Tweet</Tweet>
        </SearchPanel>
      </div>
    </div>
  </Top>
);
