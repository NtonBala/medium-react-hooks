import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {useFetch} from 'Hooks'
import {PATHS} from 'API'
import {Loading, ErrorMessage} from 'Components'
import {ROUTES} from 'Routes'

export const PopularTags = () => {
  const {t} = useTranslation()
  const [{response, isLoading, error}, doFetch] = useFetch(PATHS.tags)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  if (isLoading || !response) return <Loading />
  if (error) return <ErrorMessage />

  return (
    <div className="sidebar">
      <p>{t('common.popularTags')}</p>
      <div className="tag-list">
        {response.tags.map(tag => (
          <Link
            key={tag}
            to={`${ROUTES.tags}/${tag}`}
            className="tag-default tag-pill"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  )
}
