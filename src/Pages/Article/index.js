import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'

import {useFetch} from 'Hooks'
import {PATHS} from 'API'
import {Loading, ErrorMessage} from 'Components'
import {TagList} from 'Components/TagList'
import {ArticleBanner} from './components'
import {ROUTES} from 'Routes'

export const Article = ({match}) => {
  const slug = match.params.slug
  const apiUrl = `${PATHS.articles}/${slug}`
  const [
    {
      response: fetchArticleResponse,
      isLoading: fetchArticleIsLoading,
      error: fetchArticleError,
    },
    doFetchArticle,
  ] = useFetch(apiUrl)
  const [{response: deleteArticleResponse}, doDeleteArticle] = useFetch(apiUrl)
  const [isSuccessfullDelete, setIsSuccessfullDelete] = useState(false)

  const deleteArticle = () => {
    doDeleteArticle({
      method: 'delete',
    })
  }

  useEffect(() => {
    doFetchArticle()
  }, [doFetchArticle])

  useEffect(() => {
    if (deleteArticleResponse === null) {
      return
    }

    setIsSuccessfullDelete(true)
  }, [deleteArticleResponse])

  if (isSuccessfullDelete) {
    return <Redirect to={ROUTES.main} />
  }

  return (
    <div className="article-page">
      {!fetchArticleIsLoading && fetchArticleResponse && (
        <ArticleBanner
          article={fetchArticleResponse.article}
          deleteArticle={deleteArticle}
        />
      )}

      <div className="container page">
        {fetchArticleIsLoading && <Loading />}
        {fetchArticleError && <ErrorMessage />}

        {!fetchArticleIsLoading && fetchArticleResponse && (
          <div className="row article-content">
            <div className="col-xs-12">
              <div>
                <p>{fetchArticleResponse.article.body}</p>
              </div>

              <TagList tags={fetchArticleResponse.article.tagList} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
