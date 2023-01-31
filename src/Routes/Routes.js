import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {
  GlobalFeed,
  Article,
  Authentication,
  TagFeed,
  NoMatch,
  YourFeed,
  CreateArticle,
} from 'Pages'
import {ROUTES} from './constants'

export const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.main} component={GlobalFeed} exact />
      <Route path={ROUTES.newArticle} component={CreateArticle} />
      <Route path={ROUTES.feed} component={YourFeed} />
      <Route path={`${ROUTES.tags}/:slug`} component={TagFeed} />
      <Route path={ROUTES.login} component={Authentication} />
      <Route path={ROUTES.register} component={Authentication} />
      <Route path={`${ROUTES.articles}/:slug`} component={Article} />

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
