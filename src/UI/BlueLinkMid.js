import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlueLinkMid = styled(Link)`
  font-size: 14px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ to, children }) => (
  <BlueLinkMid to={to}>{children}</BlueLinkMid>
);
