import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {GlobalFeed, Article, Authentication} from 'Pages'

import {routes} from './constants'

export const Routes = () => {
  return (
    <Switch>
      <Route path={routes.main} component={GlobalFeed} exact />
      <Route path={routes.login} component={Authentication} />
      <Route path={routes.register} component={Authentication} />
      <Route path={`${routes.articles}/:slug`} component={Article} />

      {/* TODO: Remove when another decision for package['homepage'] is found */}
      {process.env.NODE_ENV === 'development' && (
        <Route path={process.env.PUBLIC_URL}>
          <Redirect to="/" />
        </Route>
      )}
    </Switch>
  )
}
