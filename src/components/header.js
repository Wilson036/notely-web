import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import ButtonAsLink from './ButtonAsLink';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const UserState = styled.div`
  margin-left: auto;
`;

const Header = props => {
  const { data, client } = useQuery(IS_LOGGED_IN);
  const logOut = () => {
    localStorage.removeItem('token');
    //清除快取
    client.resetStore();
    client.writeData({ data: { isLoggedIn: false } });
    props.history.push('/');
  };
  return (
    <HeaderBar>
      <img src={logo} alt="notedly logo" height="40" />
      <LogoText>Notedly</LogoText>
      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink onClick={logOut}>Log Out</ButtonAsLink>
        ) : (
          <p>
            <Link to={'/signIn'}>Sign In</Link> or{' '}
            <Link to={'/signUp'}>Sign Up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default withRouter(Header);
