import React from "react";
import styled from "styled-components";
import ControlPanel from "./ControlPanel";
import UserInfo from "./UserInfo";
import Content from "./Content";

const Main = styled.main`
  background: #e6ecf0;
`;

export default () => (
  <Main>
    <ControlPanel />
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <UserInfo />
        </div>
        <div className="col-xs-6">
          <Content />
        </div>
        <div className="col-xs-3" />
      </div>
    </div>
  </Main>
);
