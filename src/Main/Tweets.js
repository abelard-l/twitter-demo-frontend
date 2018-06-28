import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Message from './Message';
import { messages } from '../UI/data';

const Tweets = styled.div`
  background: #fff;
`;

const Menu = styled.div`
  border-bottom: 2px solid #e1e8ed;
  padding: 15px 10px 20px 10px;
`;

const MenuLink = styled(Link)`
  font-size: 18px;
  color: ${({ active }) => (active ? '#000000' : '#1da1f2')};
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

export default ({ userid }) => (
  <Tweets>
    <Menu>
      <MenuLink to={`/${userid}/`} active="true">
        Tweets
      </MenuLink>
      <MenuLink to={`/${userid}/tweetsandreplies`}>
Tweets & replies
      </MenuLink>
      <MenuLink to={`/${userid}/media`}>
Media
      </MenuLink>
    </Menu>
    <Cards>
      {messages.map(
        ({
          id,
          pinned,
          avatar,
          userName,
          userAddress,
          dateinfo,
          comments,
          retweets,
          likes,
          currentUserLiked,
          image,
          message,
        }) => (
          <Message
            key={id}
            pinned={pinned}
            avatar={avatar}
            userName={userName}
            userAddress={userAddress}
            dateinfo={dateinfo}
            comments={comments}
            retweets={retweets}
            likes={likes}
            currentUserLiked={currentUserLiked}
            image={image}
          >
            <MessageBody>
              {message}
            </MessageBody>
          </Message>
        ),
      )}
    </Cards>
  </Tweets>
);
