import { useState, useEffect, useContext } from 'react';
import getGifs from 'Services/getGifs';
import GifContext from 'Context/GifsContext';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword }) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(0);

  // Get keyword from localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'patata';

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then(gifs => {
      // Save keyword to localStorage
      localStorage.setItem('lastKeyword', keywordToUse);
      setGifs(gifs);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    getGifs({ keyword: keywordToUse, page }).then(nextGifs => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
    });
  }, [keyword, keywordToUse, page, setGifs]);

  return { gifs, setPage };
};

export default useGifs;
