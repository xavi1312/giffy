import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import SeachForm from 'Components/SearchForm';
import HeroLogo from 'Components/HeroLogo';
import useGifs from 'Hooks/useGifs';
import { Title } from './styles';

const HomeComponent = () => {
  const { gifs } = useGifs();
  return (
    <>
      <HeroLogo />
      <SeachForm />
      <Title>Last search</Title>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default HomeComponent;
