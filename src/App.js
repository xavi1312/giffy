import React from 'react';
import ListOfGifs from 'Components/ListOfGifs';
import { Home } from 'styles';

function App() {
  return (
    <Home className='App'>
      <ListOfGifs />
    </Home>
  );
}

export default App;
