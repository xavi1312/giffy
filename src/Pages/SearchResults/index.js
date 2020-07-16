import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import SeachForm from 'Components/SearchForm';
import HeroLogo from 'Components/HeroLogo';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const { keyword } = useParams();
  return (
    <>
      <HeroLogo />
      <SeachForm />
      <ListOfGifs keyword={keyword} />
    </>
  );
};

export default SearchResults;
