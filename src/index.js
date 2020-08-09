import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';

import {TopBar} from 'Components';
import {Routes} from 'Routes';

const Router =
  process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter;

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopBar />

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
