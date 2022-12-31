import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'
import {APP_NAME} from 'Constants'

export const TopBar = () => {
  const {t} = useTranslation()

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <h1>
          <Link to={ROUTES.main} className="navbar-brand">
            {APP_NAME}
          </Link>
        </h1>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to={ROUTES.main} className="nav-link">
              {t('common.home')}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={ROUTES.login} className="nav-link">
              {t('common.signIn')}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={ROUTES.register} className="nav-link">
              {t('common.signUp')}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
