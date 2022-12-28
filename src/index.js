import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, HashRouter} from 'react-router-dom'

import {TopBar} from 'Components'
import {Routes} from 'Routes'
import {CurrentUserProvider} from 'Contexts'

import './i18n'

const Router =
  process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar />

        <Routes />
      </Router>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
