import React from 'react'
import classNames from 'classnames'

import {useFetch} from 'Hooks'
import {ROUTES} from 'Routes'

export const AddToFavorites = ({isFavorite, favoritesCount, articleSlug}) => {
  const apiUrl = `${ROUTES.articles}/${articleSlug}/favorite`
  const [{response}, doFetch] = useFetch(apiUrl)
  const favoritesCountWithResponse = response
    ? response.article.favoritesCount
    : favoritesCount
  const isFavoriteWithResponse = response
    ? response.article.favorited
    : isFavorite
  const btnClasses = classNames({
    btn: true,
    'btn-sm': true,
    'btn-primary': isFavoriteWithResponse,
    'btn-outline-primary': !isFavoriteWithResponse,
  })

  const handleLike = e => {
    e.preventDefault()
    doFetch({
      method: isFavoriteWithResponse ? 'delete' : 'post',
    })
  }

  return (
    <button className={btnClasses} onClick={handleLike}>
      <i className="ion-heart" />
      <span>&nbsp; {favoritesCountWithResponse}</span>
    </button>
  )
}
