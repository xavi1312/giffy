import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import { Home } from './styles';
import SeachForm from 'Components/SearchForm';
import HeroLogo from 'Components/HeroLogo';

const HomeComponent = () => {
  return (
    <Home>
      <HeroLogo />
      <SeachForm />
      <ListOfGifs />
    </Home>
  );
};

export default HomeComponent;
