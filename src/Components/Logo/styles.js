import styled from 'styled-components';

function setSize(size) {
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
function setPosition(position) {
  switch (position) {
    case 'center':
      return 'margin: 0 auto;';
    case 'right':
      return 'margin-left: auto;';
    default:
      return;
  }
}

export const Logo = styled.img`
  display: block;
  ${props => setSize(props.size)}
  ${props => setPosition(props.position)}
`;
