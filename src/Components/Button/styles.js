import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
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
  border-radius: 0.125em;
  background-color: ${PRIMARY_COLOR.cssVar};

  box-shadow: 0.125em 0.125em ${Darken(PRIMARY_COLOR.color, 120)};
  :active {
    box-shadow: inset 0.125em 0.125em 0.188em ${Darken(
      PRIMARY_COLOR.color,
      120
    )};
  }
  outline: none;
`;
export const Link = styled(Button.withComponent(LinkRouter))`
  text-decoration: none;
`;
