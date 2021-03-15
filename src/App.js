import Pages from './pages';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Pages />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
