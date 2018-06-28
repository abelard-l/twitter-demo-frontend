import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ color }) => color || '#1da1f2'};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
