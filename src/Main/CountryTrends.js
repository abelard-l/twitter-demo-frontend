import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BlueLink from "../UI/BlueLink";
import iconOval from "../UI/icons/oval.svg";

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

const TrendDescription = styled.div`
  color: #718290;
  font-size: 12px;
  line-height: 16px;
`;

const TrendTweetsCount = TrendDescription;

const Trend = ({ to, tweets, description, children }) => (
  <TrendWrap>
    <TrendLink to={to}>{children}</TrendLink>
    {tweets && <TrendTweetsCount>{tweets}</TrendTweetsCount>}
    {description && <TrendDescription>{description}</TrendDescription>}
  </TrendWrap>
);

export default () => (
  <CountryTrends>
    <Title>
      <Header>United Kingdom Trends</Header>
      <Dot src={iconOval} />
      <BlueLink fontSize="13px" to="/change">
        Change
      </BlueLink>
    </Title>
    <Trend to="/trends/BringYourDogToWorkDay">#BringYourDogToWorkDay</Trend>
    <Trend to="/trends/FridayFeeling" tweets={12100}>
      #FridayFeeling
    </Trend>
    <Trend
      to="/trends/BrexitAnniversary"
      tweets={1000}
      description="It’s one year since the UK voted to leave the European
      Union"
    >
      #BrexitAnniversary
    </Trend>
    <Trend to="/trends/HMSQueenElizabeth" description="1,036 Tweets">
      HMS Queen Elizabeth
    </Trend>
    <Trend to="/trends/JoeBudden" description="1,036 Tweets">
      Joe Budden
    </Trend>
    <Trend to="/trends/Trident" description="6,136 Tweets">
      Trident
    </Trend>
  </CountryTrends>
);
