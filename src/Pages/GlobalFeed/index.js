import React, {useEffect, useContext} from 'react'
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
import {CurrentUserContext} from 'Contexts'

import {Banner} from './Banner'

export const GlobalFeed = ({location}) => {
  const {currentPage, offset} = getPaginator(location.search, ARTICLES_LIMIT)
  const stringifiedParams = stringify({limit: ARTICLES_LIMIT, offset})
  const apiUrl = `${PATHS.articles}?${stringifiedParams}`
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
  const [currentUserState] = useContext(CurrentUserContext)

  useEffect(() => {
    doFetch()
  }, [doFetch, currentPage])

  return (
    <div className="home-page">
      {currentUserState.isLoggedIn === false && <Banner />}

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler />

            {isLoading && <Loading />}
            {error && <ErrorMessage />}
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
