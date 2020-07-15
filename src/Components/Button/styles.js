import styled from 'styled-components';
import { PRIMARY_COLOR, Darken, BLACk_COLOR } from 'styles/Colors';

function fontSize(size) {
  switch (size) {
    case 'smoll':
      return '0.8rem';
    case 'medium':
      return '1rem';
    case 'large':
      return '1.2rem';
    default:
      console.warn(`Button component: size ${size} not found`);
      return '1rem';
  }
}

export const Button = styled.button`
  color: ${BLACk_COLOR.cssVar};
  font-size: ${({ size }) => fontSize(size)};

  padding: 0.5em;

  border: none;
  border-radius: 2px;
  background-color: ${PRIMARY_COLOR.cssVar};

  box-shadow: 2px 2px ${Darken(PRIMARY_COLOR.color, 120)};
  :active {
    box-shadow: inset 2px 2px 3px ${Darken(PRIMARY_COLOR.color, 120)};
  }
  margin-bottom: 4px;
  outline: none;
`;
