import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import {CurrentUserContext} from 'Contexts'
import {ROUTES} from 'Routes'

export const PrivateRoute = ({component: Component, ...rest}) => {
  const [currentUserState] = useContext(CurrentUserContext)
  console.log('currentUserState', currentUserState)

  return (
    <Route
      {...rest}
      render={props => {
        return currentUserState.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.main} />
        )
      }}
    />
  )
}
