import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from 'Pages/Home';
import SearchResults from 'Pages/SearchResults';
// Providers
import { GifsContextProvider } from 'Context/GifsContext';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <GifsContextProvider>
          <Route exact path='/' component={Home} />
          <Route exact path='/search/:keyword' component={SearchResults} />
        </GifsContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
