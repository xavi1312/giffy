import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import SeachForm from 'Components/SearchForm';
import HeroLogo from 'Components/HeroLogo';

const HomeComponent = () => {
  return (
    <>
      <HeroLogo />
      <SeachForm />
      <ListOfGifs />
    </>
  );
};

export default HomeComponent;
