import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {routes} from 'Routes/constants'

import {APP_NAME} from '../../constants'

export const TopBar = () => {
  const {t} = useTranslation()

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <h1>
          <Link to={routes.main} className="navbar-brand">
            {APP_NAME}
          </Link>
        </h1>

        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink exact to={routes.main} className="nav-link">
              {t('common.home')}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.login} className="nav-link">
              {t('common.signIn')}
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={routes.register} className="nav-link">
              {t('common.signUp')}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
