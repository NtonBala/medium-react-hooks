import React from 'react'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'

import {ROUTES, FAVORITES} from 'Routes'

export const ArticlesToggle = ({username}) => {
  const {t} = useTranslation()

  return (
    <div className="articles-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={`${ROUTES.profiles}/${username}`}
            exact
          >
            {t('profile.posts')}
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link"
            to={`${ROUTES.profiles}/${username}/${FAVORITES}`}
          >
            {t('profile.favorites')}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
