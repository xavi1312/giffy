import styled from 'styled-components';
import { PRIMARY_COLOR } from 'styles/colors';

export const TopBar = styled.nav`
  line-height: 1.5;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;

  a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 20px;
    padding-bottom: 5px;
    cursor: pointer;

    :hover {
      border-bottom: 2px solid ${PRIMARY_COLOR.cssVar};
    }
  }
`;
