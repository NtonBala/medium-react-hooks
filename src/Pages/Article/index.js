import React, {useEffect} from 'react'

import {useFetch} from 'Hooks'
import {PATHS} from 'API'
import {Loading, ErrorMessage} from 'Components'
import {TagList} from 'Components/TagList'
import {Banner} from './Banner'

export const Article = ({match}) => {
  const slug = match.params.slug
  const apiUrl = `${PATHS.articles}/${slug}`
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <div className="article-page">
      {!isLoading && response && <Banner article={response.article} />}

      <div className="container page">
        {isLoading && <Loading />}
        {error && <ErrorMessage />}

        {!isLoading && response && (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{response.article.body}</p>
              </div>

              <TagList tags={response.article.tagList} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
