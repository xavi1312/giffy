import styled from 'styled-components';
import { PRIMARY_COLOR, Darken, BLACk_COLOR } from 'styles/colors';
import { setAligment } from 'styles/functions';

function fontSize({ size }) {
  switch (size) {
    case 'smoll':
      return 'font-size: 0.8rem;';
    case 'medium':
      return 'font-size: 1rem;';
    case 'large':
      return 'font-size: 1.2rem;';
    default:
      console.warn(`Button component: size ${size} not found`);
      return 'font-size: 1rem;';
  }
}

export const Button = styled.button`
  display: block;

  padding: 0.5em;
  ${setAligment}

  color: ${BLACk_COLOR.cssVar};
  ${fontSize};
  margin-top: 1rem;
  
  border: none;
  border-radius: 2px;
  background-color: ${PRIMARY_COLOR.cssVar};

  box-shadow: 2px 2px ${Darken(PRIMARY_COLOR.color, 120)};
  :active {
    box-shadow: inset 2px 2px 3px ${Darken(PRIMARY_COLOR.color, 120)};
  }
  outline: none;
`;
