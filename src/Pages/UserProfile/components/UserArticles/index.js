import React, {useEffect} from 'react'

import {getPaginator} from 'Utils'
import {ARTICLES_LIMIT} from 'Constants'
import {useFetch} from 'Hooks'
import {Loading, ErrorMessage, Feed, Pagination} from 'Components'
import {getApiUrl} from './utils'

export const UserArticles = ({username, location, isFavorites, url}) => {
  const {offset, currentPage} = getPaginator(location.search)
  const apiUrl = getApiUrl({username, offset, isFavorites})
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch, isFavorites])

  return (
    <div>
      {isLoading && <Loading className="article-preview" />}
      {error && <ErrorMessage className="article-preview" />}
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
