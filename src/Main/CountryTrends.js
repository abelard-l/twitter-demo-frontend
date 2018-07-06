import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedNumber } from 'react-intl';
import { countryTrends } from '../UI/data';
import TextBtn from '../UI/TextBtn';
import iconOval from '../UI/icons/oval.svg';

const CountryTrends = styled.div`
  background: #fff;
  margin-bottom: 23px;
  padding: 15px 16px 23px 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 14px;
`;

const Header = styled.h3`
  font-size: 16px;
  margin: 0px 7px 0px 0px;
`;

const Dot = styled.img`
  align-self: center;
  margin-right: 8px;
`;

const TrendWrap = styled.div`
  margin-bottom: 10px;
`;

const TrendLink = styled(Link)`
  font-size: 15px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SubTrendText = styled.div`
  color: #718290;
  font-size: 12px;
  line-height: 16px;
`;

const Trend = ({
  to, count, description, name,
}) => (
  <TrendWrap>
    <TrendLink to={to}>{name}</TrendLink>
    {count && (
      <SubTrendText>
        <FormattedNumber value={count} /> Tweets
      </SubTrendText>
    )}
    {description && <SubTrendText>{description}</SubTrendText>}
  </TrendWrap>
);

export default () => (
  <CountryTrends>
    <Title>
      <Header>United Kingdom Trends</Header>
      <Dot src={iconOval} />
      <TextBtn>Change</TextBtn>
    </Title>
    {countryTrends.map(({
      id, to, count, description, name,
    }) => (
      <Trend key={id} to={to} count={count} description={description} name={name} />
    ))}
  </CountryTrends>
);
