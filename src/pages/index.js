import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorites from './favorties';
import Home from './home';
import MyNotes from './mynotes';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/mynotes" component={MyNotes}></Route>
      <Route path="/favorites" component={Favorites}></Route>
    </Router>
  );
};

export default Pages;
