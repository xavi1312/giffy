import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useGifs from 'Hooks/useGifs';
import { useInView } from 'react-intersection-observer';
import debounce from 'just-debounce-it';

import { Title } from './styles';

import ListOfGifs from 'Components/ListOfGifs';
import SeachForm from 'Components/SearchForm';
import HeroLogo from 'Components/HeroLogo';
import Spiner from 'Components/Spiner';

const SearchResults = () => {
  const { keyword } = useParams();
  const { gifs, isLoading, setPage } = useGifs({ keyword });
  const [ref, inView] = useInView({ rootMargin: '200px' });

  const nextPage = useCallback(
    debounce(() => setPage(prev => prev + 1), 100),
    [setPage]
  );

  useEffect(() => {
    if (!inView) return;
    nextPage();
  }, [inView, nextPage]);

  return (
    <>
      <HeroLogo />
      <SeachForm />
      <Title>{keyword}</Title>
      <ListOfGifs gifs={gifs} />
      {isLoading && <Spiner aligment='center' />}
      <div ref={ref}></div>
    </>
  );
};

export default SearchResults;
