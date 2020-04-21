import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Categories from './components/Categories';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="app-header">
          <Link to="/"><p>RECIP<span className="b">EASE</span></p></Link>
        </header>
        <Switch>
          <Route exact path="/">
            <Categories />
          </Route>
          <Route path="/:category/:recipeid">
            <Recipe />
          </Route >
          <Route path="/:category">
            <Recipes />
          </Route >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
