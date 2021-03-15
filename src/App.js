import Pages from './pages';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <Pages />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
