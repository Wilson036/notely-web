import Layout from '../components/Layout';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorites from './favorties';
import Home from './home';
import MyNotes from './mynotes';
import NotePage from './note';
import SignUp from './signUp';
import Signin from './Signin';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={Signin} />
        <Route exact path="/" component={Home}></Route>
        <Route path="/mynotes" component={MyNotes}></Route>
        <Route path="/favorites" component={Favorites}></Route>
        <Route path="/note/:id" component={NotePage}></Route>
      </Layout>
    </Router>
  );
};

export default Pages;
