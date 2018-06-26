import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormattedNumber } from "react-intl";
import { statInfos } from "../data";
import FollowBtn from "../../UI/FollowBtn";
import more from "./more.png";

const ControlPanel = styled.div`
  box-shadow: 0px 2px 2px #b0b8be;
  background: #fff;
  margin-bottom: 9px;
`;

const StatItem = styled(NavLink)`
  border-bottom: ${props =>
    props.active ? "4px solid #1DA1F2" : "4px solid #fff"};
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
  color: ${props => (props.active ? "#707E88" : "#788a98")};
  padding: ${props => (props.active ? "3px 0px 0px 0px" : "0px 0px 3px 0px")};
`;

const Amount = styled.div`
  color: ${props => (props.active ? "#1DA1F2" : "#788a98")};
  font-size: 18px;
  padding: ${props => (props.active ? "0px" : "0px 0px 0px 0px")};
  font-weight: bold;
`;

const StatInfos = styled.div`
  display: flex;
  align-items: center;
`;

const StatInfo = ({ to, amount, active, name }) => (
  <StatItem active={active} exact to={to}>
    <Text active={active}>{name}</Text>
    <Amount active={active}>
      <FormattedNumber value={amount} />
    </Amount>
  </StatItem>
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

export default () => (
  <ControlPanel>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <StatInfos>
            {statInfos.map(statInfo => <StatInfo {...statInfo} />)}
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
