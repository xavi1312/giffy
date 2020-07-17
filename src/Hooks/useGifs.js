import { useState, useEffect, useContext } from 'react';
import getGifs from 'Services/getGifs';
import GifContext from 'Context/GifsContext';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = { keyword: null }) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Get keyword from localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'patata';

  useEffect(() => {
    setIsLoading(true);
    getGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs);
        // Save keyword to localStorage
        localStorage.setItem('lastKeyword', keywordToUse);
      })
      .finally(() => setIsLoading(false));
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setIsLoading(true);
    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
      })
      .finally(() => setIsLoading(false));
  }, [keyword, keywordToUse, page, setGifs]);

  return { gifs, isLoading, setPage };
};

export default useGifs;
