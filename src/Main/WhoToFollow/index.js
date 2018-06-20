import React from "react";
import styled from "styled-components";
import BlueLinkSm from "../../UI/BlueLinkSm";
import FollowBtn from "../../UI/FollowBtn";
import iconOval from "../../UI/icons/oval.svg";
import ai from "./ai.png";
import creode from "./creode.png";
import e from "./e.png";
import iconOfficial from "../../UI/icons/official.png";
import iconClose from "./icon-close.svg";
import iconPeople from "./icon-people.svg";

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

const SugWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #e6ecf0;
  justify-content: space-between;
  padding: 9px 0px 16px 0px;
`;

const SugImgWrap = styled.div``;

const SugImg = styled.img``;

const SugMain = styled.div`
  flex-basis: 65%;
  max-width: 65%;
`;

const SugTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

const SugName = styled.span`
  font-size: 13px;
  color: #292f33;
  margin-right: 3px;
  white-space: nowrap;
`;

const SugAdress = styled.span`
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

const Suggestion = ({ image, adress, official, children }) => (
  <SugWrap>
    <SugImgWrap>
      <SugImg src={image} />
    </SugImgWrap>
    <SugMain>
      <SugTitle>
        <SugName>{children}</SugName>
        {official && <IconOfficial src={iconOfficial} />}
        <SugAdress>{adress}</SugAdress>
      </SugTitle>
      <FollowBtn>Follow</FollowBtn>
    </SugMain>
    <CloseBtn />
  </SugWrap>
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
      <BlueLinkSm to="/refresh">Refresh</BlueLinkSm>
      <Dot src={iconOval} />
      <BlueLinkSm to="/viewall">View all</BlueLinkSm>
    </Title>
    <Suggestions>
      <Suggestion image={ai} adress="@appleinsider">
        AppleInsider
      </Suggestion>
      <Suggestion image={creode} adress="@Creode" official={true}>
        Creode
      </Suggestion>
      <Suggestion image={e} adress="@EpiphanySearch">
        Epiphany Search
      </Suggestion>
    </Suggestions>
    <FindPeople>
      <IconPeople src={iconPeople} />
      <BlueLinkSm to="/find">Find people you know</BlueLinkSm>
    </FindPeople>
  </WhoToFollow>
);
