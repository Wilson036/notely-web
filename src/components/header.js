import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.svg';

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

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const UserState = styled.div`
  margin-left: auto;
`;

const Header = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <HeaderBar>
      <img src={logo} alt="notedly logo" height="40" />
      <LogoText>Notedly</LogoText>
      <UserState>
        {data.isLoggedIn ? (
          <p>Log Out</p>
        ) : (
          <p>
            <Link to={'/singin'}>Sign In</Link>
            <Link to={'/singup'}>Sign Up</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default Header;
