import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FormattedNumber } from 'react-intl';
import FollowBtn from '../../UI/FollowBtn';
import more from './more.png';

const ControlPanel = styled.div`
  box-shadow: 0px 2px 2px #b0b8be;
  background: #fff;
  margin-bottom: 9px;
`;

const Link = styled(NavLink)``;

const TextAndAmount = styled.div`
  border-bottom: ${({ active }) => (active ? '4px solid #1DA1F2' : '4px solid #fff')};
  display: inline-block;
  cursor: pointer;
  line-height: 21px;
  font-size: 12px;
  text-align: center;
  padding: 0 15px 5px 15px;
  color: #788a98;
  text-decoration: none;

  &:hover {
    border-bottom: 4px solid #1da1f2;
  }
`;

const Text = styled.div`
  color: ${({ active }) => (active ? '#707E88' : '#788a98')};
  padding: ${({ active }) => (active ? '3px 0px 0px 0px' : '0px 0px 3px 0px')};
`;

const Amount = styled.div`
  color: ${({ active }) => (active ? '#1DA1F2' : '#788a98')};
  font-size: 18px;
  padding: ${({ active }) => (active ? '0px' : '0px 0px 0px 0px')};
  font-weight: bold;
`;

const StatInfos = styled.div`
  display: flex;
  align-items: center;
`;

const StatInfo = ({
  to, amount, active, children,
}) => (
  <Link exact to={to}>
    <TextAndAmount active={active}>
      <Text active={active}>{children}</Text>
      <Amount active={active}>
        <FormattedNumber value={amount} />
      </Amount>
    </TextAndAmount>
  </Link>
);

const FollowBlock = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FollowBtnControl = FollowBtn.extend`
  padding: 9px 30px;
`;

const MoreImg = styled.img``;

export default ({ userId }) => (
  <ControlPanel>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <StatInfos>
            <StatInfo to={`/${userId}/`} amount={8058} active="true">
              Tweets
            </StatInfo>
            <StatInfo to={`/${userId}/following`} amount={721}>
              Following
            </StatInfo>
            <StatInfo to={`/${userId}/followers`} amount={1815}>
              Followers
            </StatInfo>
            <StatInfo to={`/${userId}/likes`} amount={460}>
              Likes
            </StatInfo>
            <StatInfo to={`/${userId}/lists`} amount={2}>
              Lists
            </StatInfo>
          </StatInfos>
        </div>
        <div className="col-xs-3">
          <FollowBlock>
            <FollowBtnControl>Follow</FollowBtnControl>
            <MoreImg src={more} />
          </FollowBlock>
        </div>
      </div>
    </div>
  </ControlPanel>
);
