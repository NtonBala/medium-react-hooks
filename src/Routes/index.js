import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {GlobalFeed, Article} from 'Pages';

import {routes} from './constants';

export const Routes = () => {
  return (
    <Switch>
      <Route path={routes.main} component={GlobalFeed} exact />
      <Route path={`${routes.articles}/:slug`} component={Article} />
    </Switch>
  );
};
