import React from "react";
import styled from "styled-components";
import ControlPanel from "./ControlPanel";
import UserInfo from "./UserInfo";
import UserFollowers from "./UserFollowers";
import UserPhotosAndVideos from "./UserPhotosAndVideos";
import Tweets from "./Tweets";
import CountryTrends from "./CountryTrends";
import Copyright from "./Copyright";

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
          <UserFollowers />
          <UserPhotosAndVideos />
        </div>
        <div className="col-xs-6">
          <Tweets />
        </div>
        <div className="col-xs-3">
          <CountryTrends />
          <Copyright />
        </div>
      </div>
    </div>
  </Main>
);
