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
  const { userId } = match.params;

  return (
    <React.Fragment>
      <Main>
        <ControlPanel userId={userId} />
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <UserInfo userId={userId} />
              <UserFollowers />
              <UserPhotosAndVideos />
            </div>
            <div className="col-xs-6">
              <Tweets userId={userId} />
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
