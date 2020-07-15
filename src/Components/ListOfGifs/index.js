import React from 'react';
import Gif from 'Components/Gif';
import Button from 'Components/Button';
import useGifs from 'Hooks/useGifs';
import { ListOfGifs, Title } from './styles';
import { useCallback } from 'react';

const ListOfGifsComponent = ({ keyword }) => {
  const { gifs, setPage } = useGifs({ keyword });

  const handleClick = useCallback(() => {
    setPage(prev => prev + 1);
  }, [setPage]);

  return (
    <>
      <Title>{keyword || 'Pokemon'}</Title>
      <ListOfGifs>
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}
      </ListOfGifs>

      <Button onClick={handleClick} aligment='center' size='large'>
        Load more
      </Button>
    </>
  );
};

export default ListOfGifsComponent;
