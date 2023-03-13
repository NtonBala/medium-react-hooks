import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'

import {ROUTES, FAVORITES} from 'Routes'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'

import {UserInfo} from './UserInfo'

export const UserProfile = ({location, match}) => {
  const {t} = useTranslation()
  const slug = match.params.slug
  const isFavorites = location.pathname.includes(FAVORITES)
  const apiUrl = `${PATHS.profiles}/${slug}`
  const [{response}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  if (!response) {
    return null
  }

  return (
    <div className="profile-page">
      <UserInfo profile={response.profile} />

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`${ROUTES.profiles}/${response.profile.username}`}
                    exact
                  >
                    {t('profile.posts')}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`${ROUTES.profiles}/${response.profile.username}/${FAVORITES}`}
                  >
                    {t('profile.favorites')}
                  </NavLink>
                </li>
              </ul>
            </div>
            User Articles
          </div>
        </div>
      </div>
    </div>
  )
}
