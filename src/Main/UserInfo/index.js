import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import formatDate from '../../Common/formatDate';
import iconJoined from './icon-joined.svg';
import iconLink from './icon-link.svg';
import iconLocation from './icon-location.svg';
import official from '../../UI/icons/official.png';

const Information = styled.div`
  padding-right: 10px;
  position: relative;
  margin-bottom: 19px;
`;

const UserAvatar = styled.img`
  position: absolute;
  top: -180px;
  border-radius: 50%;
  max-width: 210px;
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

export default class UserInfo extends Component {
  state = {
    error: false,
    info: {},
  };

  componentDidMount() {
    const { userid } = this.props;

    fetch(
      `https://twitter-demo.erodionov.ru/api/v1/accounts/${userid}?access_token=${
        process.env.REACT_APP_TWITTER_KEY
      }`,
    )
      .then(response => response.json())
      .then(info => this.setState({ info }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error, info } = this.state;
    if (error) return error;

    return (
      <Information>
        <Helmet title={`${info.username} (@${info.acct}) | Twitter`} />
        <UserAvatar src={info.avatar_static} />
        <UserName>
          {info.display_name} <TickImg src={official} />
        </UserName>
        <Following>
          @
          {info.acct} <SmallerGrayText>Follows you</SmallerGrayText>
        </Following>
        <Description dangerouslySetInnerHTML={{ __html: info.note }} />
        {info.city && (
          <Country>
            <Icon src={iconLocation} />
            <GrayText>{info.city}</GrayText>
          </Country>
        )}
        {info.website && (
          <WebSiteInfo>
            <Icon src={iconLink} />
            <WebSite href={`http://${info.website}`}>{info.website}</WebSite>
          </WebSiteInfo>
        )}
        <Joined>
          <Icon src={iconJoined} />
          <GrayText>{formatDate(info.created_at)}</GrayText>
        </Joined>
        <Buttons>
          <BlueButton>Tweet to</BlueButton>
          <BlueButton>Message</BlueButton>
        </Buttons>
      </Information>
    );
  }
}
