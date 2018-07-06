import React from 'react';
import styled from 'styled-components';
import TextBtn from '../../UI/TextBtn';
import BlueLink from '../../UI/BlueLink';
import FollowBtn from '../../UI/FollowBtn';
import iconOval from '../../UI/icons/oval.svg';
import { suggestions } from '../../UI/data';
import iconOfficial from '../../UI/icons/official.png';
import iconClose from './icon-close.svg';
import iconPeople from './icon-people.svg';

const WhoToFollow = styled.div`
  background: #fff;
  margin-bottom: 10px;
  padding: 15px 16px 23px 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 14px;
`;

const Header = styled.h3`
  font-size: 16px;
  margin: 0px;
`;

const Dot = styled.img`
  align-self: center;
  margin: 0px 8px;
`;

const SuggestionInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #e6ecf0;
  justify-content: space-between;
  padding: 9px 0px 16px 0px;
`;

const ToFollowBrand = styled.div``;

const ToFollowImg = styled.img``;

const Main = styled.div`
  flex-basis: 65%;
  max-width: 65%;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

const Name = styled.span`
  font-size: 13px;
  color: #292f33;
  margin-right: 3px;
  white-space: nowrap;
`;

const Address = styled.span`
  font-size: 13px;
  color: #657786;
  margin-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const IconOfficial = styled.img``;

const CloseBtn = styled.button`
  background: url(${iconClose}) no-repeat;
  border: 0;
  cursor: pointer;
  height: 8px;
  width: 8px;
`;

const Suggestions = styled.div``;

const Suggestion = ({
  image, adress, official, name,
}) => (
  <SuggestionInfo>
    <ToFollowBrand>
      <ToFollowImg src={image} />
    </ToFollowBrand>
    <Main>
      <UserInfo>
        <Name>{name}</Name>
        {official && <IconOfficial src={iconOfficial} />}
        <Address>{adress}</Address>
      </UserInfo>
      <FollowBtn>Follow</FollowBtn>
    </Main>
    <CloseBtn />
  </SuggestionInfo>
);

const FindPeople = styled.div`
  display: flex;
  align-items: center;
  padding-top: 23px;
`;

const IconPeople = styled.img`
  margin-right: 5px;
`;

export default () => (
  <WhoToFollow>
    <Title>
      <Header>Who To Follow</Header>
      <Dot src={iconOval} />
      <TextBtn>Refresh</TextBtn>
      <Dot src={iconOval} />
      <BlueLink fontSize="13px" to="/viewall">
        View all
      </BlueLink>
    </Title>
    <Suggestions>
      {suggestions.map(({
        id, image, address, official, name,
      }) => (
        <Suggestion key={id} image={image} address={address} official={official} name={name} />
      ))}
    </Suggestions>
    <FindPeople>
      <IconPeople src={iconPeople} />
      <BlueLink fontSize="13px" to="/find">
        Find people you know
      </BlueLink>
    </FindPeople>
  </WhoToFollow>
);
