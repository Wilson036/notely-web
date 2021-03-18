import Layout from '../components/Layout';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Favorites from './favorties';
import Home from './home';
import MyNotes from './mynotes';
import NotePage from './note';
import SignUp from './signUp';
import Signin from './Signin';
import { gql, useQuery } from '@apollo/client';

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={Signin} />
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute path="/mynotes" component={MyNotes} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NotePage}></Route>
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  console.log('rest', rest);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signIn',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;
