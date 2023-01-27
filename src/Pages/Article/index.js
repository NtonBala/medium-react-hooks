import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import {useFetch} from 'Hooks'
import {PATHS} from 'API'
import {ROUTES} from 'Routes'
import {Loading, ErrorMessage} from 'Components'
import {TagList} from 'Components/TagList'

export const Article = ({match}) => {
  const slug = match.params.slug
  const apiUrl = `${PATHS.articles}/${slug}`
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <div className="article-page">
      <div className="banner">
        {!isLoading && response && (
          <div className="container">
            <h1>{response.article.title}</h1>

            <div className="article-meta">
              <Link
                to={`${ROUTES.profiles}/${response.article.author.username}`}
              >
                <img src={response.article.author.image} alt="" />{' '}
              </Link>

              <div className="info">
                <Link
                  to={`${ROUTES.profiles}/${response.article.author.username}`}
                >
                  {response.article.author.username}
                </Link>
                <span className="date">{response.article.createdAt}</span>
              </div>
            </div>
          </div>
        )}
      </div>

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
