import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Navigation from './components/commun/Navigation';
import Footer from './components/commun/Footer';
import Chrono from './components/Chrono';
import Minuteur from './components/minuteur/Minuteur';

const App = () => {
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
      <Footer />
    </Router>
  );
};

export default App;
