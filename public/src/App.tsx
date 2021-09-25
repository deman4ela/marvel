import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ErrorPage from './Components/ErrorPage';
import Heroes from './Components/Heroes';
import ComicsOfHero from './Components/ComicsOfHero';
require('dotenv').config();

function App() {
      return (
      <Router>
        <Switch>

          <Route path="/" exact component={Heroes} />
          
          <Route path="/comics/:heroID" component={ComicsOfHero} />

          <Route path="*" component={ErrorPage} />
        
        </Switch>
    </Router>
    )
  }

export default App;
