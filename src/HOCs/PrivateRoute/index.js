import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import {CurrentUserContext} from 'Contexts'
import {ROUTES} from 'Routes'

export const PrivateRoute = ({component: Component, ...rest}) => {
  const [currentUser] = useContext(CurrentUserContext)

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.main} />
        )
      }}
    />
  )
}
