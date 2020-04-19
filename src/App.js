import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Chrono from './components/Chrono';
import Minuteur from './components/Minuteur';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/chrono'>
          <Chrono />
        </Route>
        <Route path='/minuteur'>
          <Minuteur />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
