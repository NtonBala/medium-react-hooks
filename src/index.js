import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {Routes} from 'Routes';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to hooks!</h2>

      <Router>
        <Routes />
      </Router>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
