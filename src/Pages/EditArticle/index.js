import React, {useEffect, useState, useContext} from 'react'
import {Redirect} from 'react-router-dom'

import {ArticleForm} from 'Components'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'
import {ROUTES} from 'Routes'
import {CurrentUserContext} from 'Contexts'

export const EditArticle = ({match}) => {
  const slug = match.params.slug
  const apiUrl = `${ROUTES.articles}/${slug}`
  const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl)
  const [
    {response: updateArticleResponse, error: updateArticleError},
    doUpdateArticle,
  ] = useFetch(apiUrl)
  const [initialValues, setInitialValues] = useState(null)
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)
  const [currentUserState] = useContext(CurrentUserContext)

  const handleSubmit = article => {
    doUpdateArticle({
      method: 'put',
      data: {
        article,
      },
    })
  }

  useEffect(() => {
    doFetchArticle()
  }, [doFetchArticle])

  useEffect(() => {
    if (!fetchArticleResponse) {
      return
    }

    setInitialValues({
      title: fetchArticleResponse.article.title,
      description: fetchArticleResponse.article.description,
      body: fetchArticleResponse.article.body,
      tagList: fetchArticleResponse.article.tagList,
    })
  }, [fetchArticleResponse])

  useEffect(() => {
    if (!updateArticleResponse) {
      return
    }

    setIsSuccessfullSubmit(true)
  }, [updateArticleResponse])

  if (currentUserState.isLoggedIn === false) {
    return <Redirect to={PATHS.main} />
  }

  if (isSuccessfullSubmit) {
    return <Redirect to={`${PATHS.articles}/${slug}`} />
  }

  return (
    <div>
      <ArticleForm
        onSubmit={handleSubmit}
        errors={(updateArticleError && updateArticleError.errors) || {}}
        initialValues={initialValues}
      />
    </div>
  )
}
