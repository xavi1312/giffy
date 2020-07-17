import React from 'react';
import Gif from 'Components/Gif';
import { ListOfGifs } from './styles';

const ListOfGifsComponent = ({ gifs }) => {
  return (
    <>
      <ListOfGifs>
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}
      </ListOfGifs>
    </>
  );
};

export default React.memo(ListOfGifsComponent);
