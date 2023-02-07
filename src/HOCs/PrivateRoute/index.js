import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import {CurrentUserContext} from 'Contexts'
import {ROUTES} from 'Routes'

export const PrivateRoute = ({component: Component, ...rest}) => {
  const [currentUserState] = useContext(CurrentUserContext)

  return (
    <Route
      {...rest}
      render={props =>
        currentUserState.isLoggedIn === false ? (
          <Redirect to={ROUTES.main} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}
