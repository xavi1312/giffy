import styled from 'styled-components';

export const ListOfGifs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: masonry;
  grid-auto-rows: 200px;
  grid-auto-flow: row dense;

  align-items: center;
  gap: 1rem;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-transform: capitalize;

  margin: 0.2em 0;
`;
