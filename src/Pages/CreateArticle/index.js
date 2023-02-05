import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'

import {ArticleForm} from 'Components'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'
import {ROUTES} from 'Routes'

const INITIAL_VALUES = {
  title: '',
  description: '',
  body: '',
  tagList: [],
}

export const CreateArticle = () => {
  const apiUrl = PATHS.articles
  const [{response, error}, doFetch] = useFetch(apiUrl)
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false)

  const handleSubmit = article => {
    doFetch({
      method: 'post',
      data: {
        article,
      },
    })
  }

  useEffect(() => {
    if (!response) {
      return
    }

    setIsSuccessfullSubmit(true)
  }, [response])

  if (isSuccessfullSubmit) {
    return <Redirect to={`${ROUTES.articles}/${response.article.slug}`} />
  }

  return (
    <div>
      <ArticleForm
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        errors={(error && error.errors) || {}}
      />
    </div>
  )
}
