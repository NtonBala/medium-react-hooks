import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {GlobalFeed, Article, Authentication, NoMatch} from 'Pages'

import {routes} from './constants'

export const Routes = () => {
  return (
    <Switch>
      <Route path={routes.main} component={GlobalFeed} exact />
      <Route path={routes.login} component={Authentication} exact />
      <Route path={routes.register} component={Authentication} exact />
      <Route path={`${routes.articles}/:slug`} component={Article} exact />

      {/* TODO: Remove when another decision for package['homepage'] is found */}
      {process.env.NODE_ENV === 'development' && (
        <Route path={process.env.PUBLIC_URL}>
          <Redirect to="/" />
        </Route>
      )}

      <Route path="*" component={NoMatch} />
    </Switch>
  )
}
