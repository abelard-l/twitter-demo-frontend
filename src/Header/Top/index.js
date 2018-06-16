import React from "react";
import styled from "styled-components";
import avatar from "./avatar.png";
import iconHome from "./icon-home.svg";
import iconMessages from "./icon-messages.svg";
import iconMoments from "./icon-moments.svg";
import iconNotifications from "./icon-notifications.svg";
import magnifier from "./magnifier.svg";
import twitterLogo from "./twitter-logo.svg";

const Top = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 500;
  background-color: #fff;
  border-bottom: 1px solid #b0b8be;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex: 1;
  box-sizing: border-box;
`;

const MenuItemWrap = styled.div`
  align-items: center;
  display: flex;

  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 4px solid #fff;
  padding: 12px 0px;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }
`;

const Text = styled.a`
  margin-left: 6px;
  font-size: 13px;
  line-height: 20px;
  color: #667580;
  text-decoration: none;
`;

const MenuItem = ({ text, image }) => (
  <MenuItemWrap>
    <img alt={text} src={image} /> <Text href="#">{text}</Text>
  </MenuItemWrap>
);

const Logotype = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

const TwitterLogo = styled.img``;

const SearchPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  padding: 6px 0px;
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
  font-weight: bold;
  border-radius: 100px;
  padding: 8px 24px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1990d9;
  }
`;

export default () => (
  <Top>
    <div className="container">
      <div className="row middle-xs">
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
