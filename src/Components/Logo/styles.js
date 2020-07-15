import styled from 'styled-components';
import { setAligment } from 'styles/functions';

function setSize({ size }) {
  switch (size) {
    case 'smoll':
      return 'width: 100px;';
    case 'medium':
      return 'width: 300px;';
    case 'large':
      return 'width: 400px;';
    default:
      return console.warn('Logo component: Size auto');
  }
}

export const Logo = styled.img`
  display: block;
  ${setSize}
  ${setAligment}
`;
