import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Navigation from './Navigation';

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    width: 100%;
    flex: auto;
    flex-direction: column;
  }
`;

const StyledMain = styled.div`
  position: fixed;
  height: calc(100% - 185px);
  width: 100%;
  padding: 1em;
  overflow-y: scroll;
  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    height: calc(100% - 64px);
    width: calc(100% - 220px);
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Navigation />
        <StyledMain>{children}</StyledMain>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
