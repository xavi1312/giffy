import React from 'react';
import { Home } from './styles';
import ListOfGifs from 'Components/ListOfGifs';
import SeachForm from 'Components/SearchForm';
import { useParams } from 'react-router-dom';
import HeroLogo from 'Components/HeroLogo';

const SearchResults = () => {
  const { keyword } = useParams();
  return (
    <Home>
      <HeroLogo />
      <SeachForm />
      <ListOfGifs keyword={keyword} />
    </Home>
  );
};

export default SearchResults;
