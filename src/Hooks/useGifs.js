import { useState, useEffect, useContext } from 'react';
import getGifs from 'Services/getGifs';
import GifContext from 'Context/GifsContext';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword = 'pokemon' }) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getGifs({ keyword }).then(setGifs);
  }, [keyword, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs({ keyword, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
    });
  }, [keyword, page, setGifs]);

  return { gifs, setPage };
};

export default useGifs;
