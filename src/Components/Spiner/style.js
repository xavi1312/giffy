import styled from 'styled-components';
import { setAligment } from 'styles/functions';

function setSize({ size }) {
  switch (size) {
    case 'small':
      return 'width: 50px';
    case 'medium':
      return 'width: 100px';
    case 'large':
      return 'width: 200px';

    default:
      return 'width: 100px;';
  }
}

export const Spiner = styled.img`
  display: block;
  ${setSize}
  ${setAligment}
`;
