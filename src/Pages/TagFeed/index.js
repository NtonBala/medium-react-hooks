import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'
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

export const TagFeed = ({location, match}) => {
  const {t} = useTranslation()
  const tagName = match.params.slug
  const {currentPage, offset} = getPaginator(location.search, ARTICLES_LIMIT)
  const stringifiedParams = stringify({
    limit: ARTICLES_LIMIT,
    offset,
    tag: tagName,
  })
  const apiUrl = `${PATHS.articles}?${stringifiedParams}`
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch, currentPage, tagName])

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1>{t('globalFeed.bannerTitle')}</h1>
          <p>{t('globalFeed.bannerDescription')}</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <FeedToggler tagName={tagName} />

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
