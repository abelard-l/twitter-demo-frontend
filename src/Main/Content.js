import React, { Component } from "react";
import styled, { css } from "styled-components";
import Message from "./Message";
import everyInteractionImg from "./icons/every-interaction-image.png";
import avatarMiddle from "./icons/avatar-middle.png";
import futureOfTheWeb from "./icons/future-of-the-web.png";

const Content = styled.div`
  background: #fff;
  margin-top: 3px;
`;

const Menu = styled.div`
  border-bottom: 2px solid #e1e8ed;
  padding: 15px 10px 20px 10px;
`;

const MenuItem = styled.a`
  font-size: 18px;
  color: ${props => (props.active ? "#000000" : "#1da1f2")};
  margin-right: 25px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Messages = styled.section`
  background: #fff;
`;

const MessageBody = styled.div``;

const BluedLink = styled.a`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const EveryImg = styled.img`
  display: block;
  margin: 10px auto 0px auto;
`;

const SubMessage = styled.div`
  display: flex;
`;

const SubMessageText = styled.div`
  flex-basis: 75%;
  max-width: 75%;
  line-height: 22px;
  font-size: 13px;
  color: #000000;
`;

const SubMessageHeader = styled.h3`
  line-height: 22px;
  font-size: 15px;
  color: #000000;
  margin-bottom: 2px;
`;

const SubMessageUrl = styled.div`
  line-height: 28px;
  font-size: 13px;
  color: #657786;
`;

const SideImage = styled.div`
  flex-basis: 20%;
  max-width: 20%;
  margin-right: 10px;
`;

const FutureImg = styled.img`
  width: 100%;
`;

export default () => (
  <Content>
    <Menu>
      <MenuItem href="#" active={true}>
        Tweets
      </MenuItem>
      <MenuItem href="#">Tweets & replies</MenuItem>
      <MenuItem href="#">Media</MenuItem>
    </Menu>
    <Messages>
      <Message
        pinned={true}
        avatar={avatarMiddle}
        username={"Every Interaction"}
        useradress={"@EveryInteract"}
        dateinfo={"2 Mar 2015"}
        retweets={17}
        likes={47}
        currentUserLiked={true}
      >
        <MessageBody>
          We’ve made some more resources for all you wonderful{" "}
          <BluedLink href="#">#design</BluedLink> folk{" "}
          <BluedLink href="#">everyinteraction.com/resources/</BluedLink>{" "}
          <BluedLink href="#">#webdesign</BluedLink>{" "}
          <BluedLink href="#">#UI</BluedLink>
        </MessageBody>
        <EveryImg src={everyInteractionImg} />
      </Message>
      <Message
        avatar={avatarMiddle}
        username={"Every Interaction"}
        useradress={"@EveryInteract"}
        dateinfo={"23h"}
        comments={1}
        retweets={4}
        likes={2}
      >
        <MessageBody>
          Our new website concept; Taking you from… @ Every Interaction{" "}
          <BluedLink href="#">instagram.com/p/BNFGrfhBP3M/</BluedLink>
        </MessageBody>
      </Message>
      <Message
        avatar={avatarMiddle}
        username={"Every Interaction"}
        useradress={"@EveryInteract"}
        dateinfo={"Nov 18"}
      >
        <MessageBody>
          Variable web fonts are coming, and will open a world of opportunities
          for weight use online
        </MessageBody>
        <SubMessage>
          <SideImage>
            <FutureImg src={futureOfTheWeb} />
          </SideImage>
          <SubMessageText>
            <SubMessageHeader>The Future of Web Fonts</SubMessageHeader> We love
            typefaces. They give our sites and applications personalized feel.
            They convey the information and tell a story. They establish
            information hierarchy. But they’re…
            <SubMessageUrl>vilijamis.com</SubMessageUrl>
          </SubMessageText>
        </SubMessage>
      </Message>
    </Messages>
  </Content>
);
