import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {GlobalFeed, Article, Authentication} from 'Pages'

import {routes} from './constants'

export const Routes = () => {
  return (
    <Switch>
      <Route path={routes.main} component={GlobalFeed} exact />
      <Route path={routes.login} component={Authentication} />
      <Route path={routes.register} component={Authentication} />
      <Route path={`${routes.articles}/:slug`} component={Article} />
    </Switch>
  )
}
