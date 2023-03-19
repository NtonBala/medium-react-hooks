import React, {useEffect} from 'react'
import {stringify} from 'query-string'

import {getPaginator} from 'Utils'
import {ARTICLES_LIMIT} from 'Constants'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'
import {Loading, ErrorMessage, Feed, Pagination} from 'Components'

const getApiUrl = ({username, offset, isFavorites}) => {
  const params = isFavorites
    ? {limit: ARTICLES_LIMIT, offset, favorited: username}
    : {limit: ARTICLES_LIMIT, offset, author: username}

  return `${PATHS.articles}?${stringify(params)}`
}

export const UserArticles = ({username, location, isFavorites, url}) => {
  const {offset, currentPage} = getPaginator(location.search)
  const apiUrl = getApiUrl({username, offset, isFavorites})
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch, isFavorites])

  return (
    <div>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {!isLoading && response && (
        <>
          <Feed articles={response.articles} />
          <Pagination
            total={response.articlesCount}
            limit={ARTICLES_LIMIT}
            url={url}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  )
}
