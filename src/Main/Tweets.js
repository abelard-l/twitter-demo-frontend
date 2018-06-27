import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Message from "./Message";
import { messages } from "../UI/data";

const Tweets = styled.div`
  background: #fff;
`;

const Menu = styled.div`
  border-bottom: 2px solid #e1e8ed;
  padding: 15px 10px 20px 10px;
`;

const MenuLink = styled(Link)`
  font-size: 18px;
  color: ${props => (props.active ? "#000000" : "#1da1f2")};
  margin-right: 25px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Cards = styled.section`
  background: #fff;
`;

const MessageBody = styled.div``;

const BluedLink = styled(Link)`
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BluedLinkOuter = BluedLink.withComponent("a");

const addLinks = message =>
  message.split(" ").map((word, key) => {
    if (word.slice(0, 1) === "#")
      return (
        <BluedLink
          key={key}
          to={`/tags/${word.slice(1)}`}
        >{`${word} `}</BluedLink>
      );
    if (word.slice(0, 7) === "http://")
      return (
        <BluedLinkOuter key={key} href={word}>{`${word.slice(
          7
        )} `}</BluedLinkOuter>
      );
    return `${word} `;
  });

export default ({ userAdress }) => (
  <Tweets>
    <Menu>
      <MenuLink to={`/${userAdress}/`} active="true">
        Tweets
      </MenuLink>
      <MenuLink to={`/${userAdress}/tweetsandreplies`}>
        Tweets & replies
      </MenuLink>
      <MenuLink to={`/${userAdress}/media`}>Media</MenuLink>
    </Menu>
    <Cards>
      {messages.map(
        ({
          id,
          pinned,
          avatar,
          username,
          useradress,
          dateinfo,
          comments,
          retweets,
          likes,
          currentUserLiked,
          message
        }) => (
          <Message
            key={id}
            pinned={pinned}
            avatar={avatar}
            username={username}
            useradress={useradress}
            dateinfo={dateinfo}
            comments={comments}
            retweets={retweets}
            likes={likes}
            currentUserLiked={currentUserLiked}
          >
            <MessageBody>{addLinks(message)}</MessageBody>
          </Message>
        )
      )}
    </Cards>
  </Tweets>
);
