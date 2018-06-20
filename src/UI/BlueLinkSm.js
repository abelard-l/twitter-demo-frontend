import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlueLinkSm = styled(Link)`
  font-size: 13px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ({ to, children }) => (
  <BlueLinkSm to={to}>{children}</BlueLinkSm>
);
