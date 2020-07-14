import React, { useState, useEffect } from 'react';
import Gif from 'Components/Gif';
import getGifs from 'Services/GifsAPI';
import { ListOfGifs } from './styles';

const ListOfGifsComponent = ({ keyword = '' }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(keyword).then(gifs => setGifs(gifs));
  }, [keyword]);

  return (
    <ListOfGifs>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </ListOfGifs>
  );
};

export default ListOfGifsComponent;
