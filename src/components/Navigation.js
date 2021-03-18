import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }
  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;
const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const Navigation = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <StyledNav>
      <NavList>
        <li>
          <span aria-hidden="true" role="img">
            🏠
          </span>
          <Link to="/">Home</Link>
        </li>
        {data.isLoggedIn && (
          <React.Fragment>
            <li>
              <span aria-hidden="true" role="img">
                📓
              </span>
              <Link to="/mynotes">My notes</Link>
            </li>
            <li>
              <span aria-hidden="true" role="img">
                🌟
              </span>
              <Link to="/favorites">Favorites</Link>
            </li>
          </React.Fragment>
        )}
      </NavList>
    </StyledNav>
  );
};

export default Navigation;
