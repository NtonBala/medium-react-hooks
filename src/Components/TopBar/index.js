import React, {useContext} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'
import {APP_NAME} from 'Constants'
import {CurrentUserContext} from 'Contexts'

import {Icon} from '../Icon'

export const TopBar = () => {
  const {t} = useTranslation()
  const [{isLoggedIn, currentUser}] = useContext(CurrentUserContext)

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

          {isLoggedIn === false && (
            <>
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
            </>
          )}

          {isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to={ROUTES.newArticle} className="nav-link">
                  <i className="ion-compose"></i>
                  &nbsp; {t('common.newPost')}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`${ROUTES.profiles}/${currentUser.username}`}
                  className="nav-link"
                >
                  <img className="user-pic" src={currentUser.image} alt="" />
                  &nbsp; {currentUser.username}
                </NavLink>
              </li>
            </>
          )}

          <li className="nav-item">
            <NavLink to="language-switch" className="nav-link">
              <Icon
                component="Language"
                width={22}
                style={{verticalAlign: 'middle'}}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
