import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import { Home, LogoWrapper } from 'styles';
import Logo from 'Components/Logo/Logo';

function App() {
  return (
    <Home>
      <LogoWrapper>
        <Logo size='large' aligment='center' />
      </LogoWrapper>

      <ListOfGifs />
    </Home>
  );
}

export default App;
