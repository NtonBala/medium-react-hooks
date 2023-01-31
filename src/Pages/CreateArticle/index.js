import React from 'react'

import {ArticleForm} from 'Components'

export const CreateArticle = () => {
  const errors = {}
  const initialValues = {}
  const handleSubmit = data => {
    console.log('handleSubmit', data)
  }

  return (
    <div>
      <ArticleForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  )
}
