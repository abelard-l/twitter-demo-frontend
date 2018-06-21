import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  font-size: ${props => props.fontSize || "14px"};
  font-weight: ${props => props.fontWeight || "normal"};
  color: ${props => props.color || "#1da1f2"};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
