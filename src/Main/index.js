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
  const { userid } = match.params;
  // const isUser = users.filter(user => user.userAddress === userid).length !== 0;

  return (
    <React.Fragment>
      <Main>
        <ControlPanel userid={userid} />
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <UserInfo userid={userid} />
              <UserFollowers />
              <UserPhotosAndVideos />
            </div>
            <div className="col-xs-6">
              <Tweets userid={userid} />
            </div>
            <div className="col-xs-3">
              <WhoToFollow />
              <CountryTrends />
              <Copyright />
            </div>
          </div>
        </div>
      </Main>
    </React.Fragment>
  );
};
