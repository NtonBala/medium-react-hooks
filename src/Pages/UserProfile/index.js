import React, {useEffect} from 'react'

import {FAVORITES} from 'Routes'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'

import {UserInfo} from './UserInfo'
import {ArticlesToggle} from './ArticlesToggle'

export const UserProfile = ({location, match}) => {
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
            <ArticlesToggle username={response.profile.username} />
            User Articles
          </div>
        </div>
      </div>
    </div>
  )
}
