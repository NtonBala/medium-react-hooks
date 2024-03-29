import React, {useEffect} from 'react'
import {stringify} from 'query-string'

import {ARTICLES_LIMIT} from 'Constants'
import {useFetch} from 'Hooks'
import {PATHS} from 'API'
import {
  Feed,
  Pagination,
  PopularTags,
  Loading,
  ErrorMessage,
  FeedToggler,
} from 'Components'
import {getPaginator} from 'Utils'

export const YourFeed = ({location}) => {
  const {currentPage, offset} = getPaginator(location.search)
  const stringifiedParams = stringify({limit: ARTICLES_LIMIT, offset})
  const apiUrl = `${PATHS.feed}?${stringifiedParams}`
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch, currentPage])

  return (
    <div className="home-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler />

            {isLoading && <Loading className="article-preview" />}
            {error && <ErrorMessage className="article-preview" />}
            {!isLoading && response && (
              <>
                <Feed articles={response.articles} />
                <Pagination
                  total={response.articlesCount}
                  limit={ARTICLES_LIMIT}
                  currentPage={currentPage}
                />
              </>
            )}
          </div>

          <div className="col-md-3">
            <PopularTags />
          </div>
        </div>
      </div>
    </div>
  )
}
