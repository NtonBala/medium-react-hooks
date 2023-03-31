import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom'

import './Localizations'

import {TopBar} from 'Components'
import {Routes} from 'Routes'
import {CurrentUserProvider} from 'Contexts'
import {CurrentUserChecker} from 'HOCs'

const Router =
  process.env.NODE_ENV === 'development' ? BrowserRouter : HashRouter

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />

          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
