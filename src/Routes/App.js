import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import Home from 'Pages/Home';
import SearchResults from 'Pages/SearchResults';
import NotFound from 'Pages/NotFound';
// Providers
import { GifsContextProvider } from 'Context/GifsContext';
import Wrapper from 'Components/Wrapper';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <GifsContextProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/search/:keyword/:raiting'
              component={SearchResults}
            />
            <Route component={NotFound} />
          </Switch>
        </GifsContextProvider>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
