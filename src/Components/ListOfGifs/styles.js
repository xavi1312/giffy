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
