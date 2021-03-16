import Pages from './pages';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const App = () => {
  const uri = process.env.API_URI;
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
