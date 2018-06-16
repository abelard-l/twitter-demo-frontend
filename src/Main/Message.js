import React, { Component } from "react";
import styled, { css } from "styled-components";
import iconComments from "./icons/icon-comments.svg";
import iconPrivateMessage from "./icons/icon-private-message.svg";
import iconLike from "./icons/icon-like.svg";
import iconLikeRed from "./icons/icon-like-red.svg";
import iconPinned from "./icons/icon-pinned.svg";
import iconRetweet from "./icons/icon-retweet.svg";

const UserPost = styled.div`
  line-height: 30px;
  font-size: 25px;
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
  font-size: 12px;
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
  font-size: 13px;
  color: #667580;
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Amount = styled.span`
  color: ${props => (props.currentUserLiked ? "#E2264D" : "inherit")};
  margin-left: 5px;
`;

const ActionAndStat = styled.span`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

const CommentBtn = styled.button`
  background: url(${iconComments}) no-repeat;
  border: 0;
  cursor: pointer;
  height: 14px;
  width: 16px;
`;

const RetweetBtn = styled.button`
  background: url(${iconRetweet}) no-repeat;
  border: 0;
  cursor: pointer;
  height: 14px;
  width: 19px;
`;

const LikeBtn = styled.button`
  background: ${props =>
    props.currentUserLiked
      ? "url(" + iconLikeRed + ") no-repeat"
      : "url(" + iconLike + ") no-repeat"};
  border: 0;
  cursor: pointer;
  height: 14px;
  width: 17px;
`;

const PrivateMessageBtn = styled.button`
  background: url(${iconPrivateMessage}) no-repeat;
  border: 0;
  cursor: pointer;
  height: 14px;
  width: 15px;
`;

export default ({
  pinned = false,
  username,
  useradress,
  avatar,
  dateinfo,
  comments,
  retweets,
  likes,
  currentUserLiked = false,
  children
}) => (
  <UserPost>
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
          <ActionAndStat>
            <CommentBtn />
            {comments && <Amount>{comments}</Amount>}
          </ActionAndStat>
          <ActionAndStat>
            <RetweetBtn />
            {retweets && <Amount>{retweets}</Amount>}
          </ActionAndStat>
          <ActionAndStat>
            <LikeBtn currentUserLiked={currentUserLiked} />
            {likes && (
              <Amount currentUserLiked={currentUserLiked}>{likes}</Amount>
            )}
          </ActionAndStat>
          <PrivateMessageBtn />
        </Stats>
      </MessageAndStat>
    </Main>
  </UserPost>
);
