import React, { Component } from "react";
import styled, { css } from "styled-components";
import iconComments from "./icon-comments.svg";
import iconEnvelope from "./icon-envelope.svg";
import iconLove from "./icon-love.svg";
import iconLoveRed from "./icon-love-red.svg";
import iconPinned from "./icon-pinned.svg";
import iconRetweet from "./icon-retweet.svg";

const WholeInfo = styled.div`
  line-height: 30px;
  font-size: 25px;
  letter-spacing: 0.38px;
  color: #292f33;
  padding: 10px;
  border-bottom: 2px solid #e1e8ed;
`;

const Pinned = styled.div`
  margin: 0px 0px 10px 30px;
  display: flex;
  align-items: center;
`;

const PinnedText = styled.span`
  line-height: normal;
  font-size: 12px;
  letter-spacing: -0.175385px;
  color: #707e88;
  margin-left: 12px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const Main = styled.div`
  display: flex;
`;

const Avatar = styled.div`
  flex-basis: 10%;
  max-width: 10%;
`;

const AvatarIcon = styled.img``;

const MessageAndStat = styled.div`
  flex-basis: 90%;
  max-width: 90%;
`;

const UserInfo = styled.div``;

const UserName = styled.span`
  line-height: 30px;
  font-size: 15px;
  color: #292f33;
  margin-right: 7px;
`;

const UserAdress = styled.span`
  line-height: 28px;
  font-size: 13px;
  color: #657786;
`;

const DateInfo = styled.span`
  line-height: 28px;
  font-size: 13px;
  color: #657786;
`;

const Message = styled.div``;

const Stats = styled.div`
  line-height: normal;
  font-size: 13px;
  color: #667580;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
`;

const Amount = styled.span``;

const AmountRed = styled.span``;

const Comments = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const Retweets = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const Likes = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const Enveloped = styled.span``;

export default ({
  pinned = false,
  username,
  useradress,
  avatar,
  dateinfo,
  comments,
  retweets,
  likes,
  envelopes,
  children
}) => (
  <WholeInfo>
    {pinned && (
      <Pinned>
        <Icon src={iconPinned} />
        <PinnedText>Pinned Tweet</PinnedText>
      </Pinned>
    )}
    <Main>
      <Avatar>
        <AvatarIcon src={avatar} />
      </Avatar>
      <MessageAndStat>
        <UserInfo>
          <UserName>{username}</UserName>
          <UserAdress>{useradress}</UserAdress>
          <DateInfo> • {dateinfo}</DateInfo>
        </UserInfo>
        <Message>{children}</Message>
        <Stats>
          <Comments>
            <Icon src={iconComments} />
            {comments && <Amount>{comments}</Amount>}
          </Comments>
          <Retweets>
            <Icon src={iconRetweet} />
            {retweets && <Amount>{retweets}</Amount>}
          </Retweets>
          <Likes>
            {likes > 10 ? (
              <React.Fragment>
                <Icon src={iconLoveRed} />
                <AmountRed>{likes}</AmountRed>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Icon src={iconLove} />
                {likes && <Amount>{likes}</Amount>}
              </React.Fragment>
            )}
          </Likes>
          <Enveloped>
            <Icon src={iconEnvelope} />
            {envelopes && <Amount>{envelopes}</Amount>}
          </Enveloped>
        </Stats>
      </MessageAndStat>
    </Main>
  </WholeInfo>
);
