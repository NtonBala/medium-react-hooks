import React, {useEffect} from 'react'
import {useTranslation} from 'react-i18next'

import {useFetch} from 'Hooks'
import {PATHS} from 'API'
import {Feed} from 'Components'

export const GlobalFeed = () => {
  const {t} = useTranslation()
  const apiUrl = `${PATHS.articles}?limit=10&offset=0`
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

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
            {isLoading && <div>{t('common.loading')}</div>}
            {error && <div>{t('errors.common')}</div>}
            {!isLoading && response && <Feed articles={response.articles} />}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </div>
  )
}
