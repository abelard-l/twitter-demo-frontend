import React from 'react';
import styled from 'styled-components';
import ControlPanel from './ControlPanel';
import UserInfo from './UserInfo';
import UserFollowers from './UserFollowers';
import UserPhotosAndVideos from './UserPhotosAndVideos';
import Tweets from './Tweets';
import WhoToFollow from './WhoToFollow';
import CountryTrends from './CountryTrends';
import Copyright from './Copyright';
import { users } from '../UI/data';

const Main = styled.main`
  background: #e6ecf0;
`;

export default ({ match }) => {
  const { userAdress } = match.params;
  if (users.filter(user => user.useradress === userAdress).length === 0) {
    return null;
  }

  return (
    <Main>
      <ControlPanel userAdress={userAdress} />
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <UserInfo userAdress={userAdress} />
            <UserFollowers />
            <UserPhotosAndVideos />
          </div>
          <div className="col-xs-6">
            <Tweets userAdress={userAdress} />
          </div>
          <div className="col-xs-3">
            <WhoToFollow />
            <CountryTrends />
            <Copyright />
          </div>
        </div>
      </div>
    </Main>
  );
};
