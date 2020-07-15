import { useState, useEffect } from 'react';
import getGifs from 'Services/getGifs';

const useGifs = ({ keyword = 'pokemon' }) => {
  const [gifs, setGifs] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getGifs({ keyword, page }).then(gifs =>
      setGifs(actualGifs => [...actualGifs, ...gifs])
    );
  }, [keyword, page]);

  return { gifs, setGifs, setPage };
};

export default useGifs;
