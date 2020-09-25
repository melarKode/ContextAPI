import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import './lib/font-awesome/css/all.min.css'
import { Add } from './components/Add';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Watchlist />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
