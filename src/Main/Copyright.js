import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Copyright = styled.div``;

const Navigation = styled(Link)`
  display: inline-block;
  line-height: 18px;
  font-size: 13px;
  color: #718290;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Copyright>
    <Navigation to="/">© 2018 Twitter</Navigation>
    <Navigation to="/about">About</Navigation>
    <Navigation to="/help">Help Center</Navigation>
    <Navigation to="/terms">Terms</Navigation>
    <Navigation to="/privacypolicy">Privacy policy </Navigation>
    <Navigation to="/cookies">Cookies</Navigation>
    <Navigation to="/ads">Ads info</Navigation>
  </Copyright>
);
