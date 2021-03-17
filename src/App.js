import Pages from './pages';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from 'apollo-link-context';

const App = () => {
  const uri = process.env.REACT_APP_API_URI;
  const httplink = createHttpLink({ uri });
  //啟動快取
  const cache = new InMemoryCache();
  //檢查是否有jwt並將使設定至header中
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: localStorage.getItem('token') || ''
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httplink),
    cache,
    resolvers: {},
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
