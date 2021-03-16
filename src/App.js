import Pages from './pages';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const App = () => {
  const uri = process.env.REACT_APP_API_URI;

  console.log(uri);
  //啟動快取
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    uri,
    cache,
    //啟用開發者工具
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
