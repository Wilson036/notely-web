import Layout from '../components/Layout';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Favorites from './favorties';
import Home from './home';
import MyNotes from './mynotes';
import NotePage from './note';
import SignUp from './signUp';
import Signin from './Signin';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';
import NewNote from './new';
import EditNote from './edit';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={Signin} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/new" component={NewNote} />
        <PrivateRoute path="/mynotes" component={MyNotes} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <PrivateRoute path="/edit/:id" component={EditNote} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
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
