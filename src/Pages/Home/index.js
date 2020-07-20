import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import SeachForm from 'Components/SearchForm';
import HeroLogo from 'Components/HeroLogo';
import useGifs from 'Hooks/useGifs';
import { Title } from './styles';
import TopBar from 'Components/TopBar';

const HomeComponent = () => {
  const { gifs } = useGifs();
  return (
    <>
      <TopBar />
      <HeroLogo />
      <SeachForm />
      <Title>Last search</Title>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default HomeComponent;
