import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Heroes from './Components/Heroes';
import ComicsOfHero from './Components/ComicsOfHero';
import ConnectComicsOfHeroToRedux from './redux/connects/connectComics';
import ConnectHeroesOfHeroToRedux from './redux/connects/connectHeroes';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ConnectHeroesOfHeroToRedux} />
        <Route path='/comics/:heroID' component={ConnectComicsOfHeroToRedux} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
