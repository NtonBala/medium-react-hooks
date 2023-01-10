import React from 'react'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'

import {ROUTES} from 'Routes'

export const FeedToggler = ({tagName}) => {
  const {t} = useTranslation()

  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <NavLink to={ROUTES.feed} className="nav-link">
            {t('common.yourFeed')}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={ROUTES.main} className="nav-link" exact>
            {t('common.globalFeed')}
          </NavLink>
        </li>
        {tagName && (
          <li className="nav-item">
            <NavLink to={`${ROUTES.tags}/${tagName}`} className="nav-link">
              <i className="ion-pound"></i>
              &nbsp;
              {tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}
