import styled from 'styled-components';
import { mq } from 'styles/mediaQuerys';
import { PRIMARY_COLOR, BLACk_COLOR } from 'styles/colors';

const GIF_FORM = {
  squere: `grid-column-end: span 2;
  grid-row-end: span 2;`,
  largeHorizontal: `grid-column-end: span 2`,
  largeVertical: `grid-row-end: span 2`,
};

export const Gif = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;

  margin: 0;
  box-shadow: 0 0 10px black;

  background-color: ${BLACk_COLOR.cssVar};
  border-radius: 2px;
  transition: transform 100ms linear;

  :hover {
    border: 2px solid ${PRIMARY_COLOR.cssVar};
    transform: scale(1.1);
    transition: transform 100ms linear;
    z-index: 1;
  }

  ${mq.tablet} {
    :first-child {
      ${GIF_FORM.squere}
    }
    ${() => setForm}
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: top;
  object-fit: cover;

  border-radius: 2px;
`;
export const Title = styled.figcaption`
  position: absolute;
  bottom: 0;

  padding: 5px;

  color: #fff;
  text-transform: capitalize;
  background-color: rgba(0, 0, 0, 0.5);

  border-top-right-radius: 2px;
`;

function setForm() {
  const random = getRandom();

  if (random < 5) return;

  if (random <= 5 && random <= 7) {
    return GIF_FORM.squere;
  }

  if (random > 7 && random <= 9) {
    return GIF_FORM.largeHorizontal;
  }

  if (random > 9) {
    return GIF_FORM.largeVertical;
  }
}

function getRandom(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}
