import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Message from './Message';

const Messages = styled.div`
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

export default class Tweets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      messages: [],
    };

    const { userid } = this.props;
    this.userid = userid;
  }

  componentDidMount() {
    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${
        this.userid
      }/statuses?since_id=1&access_token=${process.env.REACT_APP_TWITTER_KEY}`,
    )
      .then(response => response.json())
      .then(messages => this.setState({ messages }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error, messages } = this.state;
    if (error) return error;

    return (
      <Messages>
        <Menu>
          <MenuLink to={`/${this.userid}/`} active="true">
            Tweets
          </MenuLink>
          <MenuLink to={`/${this.userid}/tweetsandreplies`}>Tweets & replies</MenuLink>
          <MenuLink to={`/${this.userid}/media`}>Media</MenuLink>
        </Menu>
        <Cards>
          {messages.map(message => (
            <Message
              key={message.id}
              pinned={message.pinned}
              avatar={message.account.avatar_static}
              userName={message.account.display_name}
              userAddress={message.account.username}
              dateinfo={message.created_at}
              comments={message.comments}
              retweets={message.reblogs_count}
              likes={message.favourites_count}
              currentUserLiked={message.activeLike}
              images={message.media_attachments}
            >
              {message.content}
            </Message>
          ))}
        </Cards>
      </Messages>
    );
  }
}
