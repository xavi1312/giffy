import styled from 'styled-components';

export const ListOfGifs = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: masonry;

  align-items: center;
  gap: 1rem;
`;
