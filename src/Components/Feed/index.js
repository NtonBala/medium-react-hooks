import React from 'react'
import {useTranslation} from 'react-i18next'

import {ArticlePreview} from './ArticlePreview'

export const Feed = ({articles}) => {
  const {t} = useTranslation()

  return (
    <div>
      {articles.length === 0 && (
        <div className="article-preview">{t('common.noArticlesYet')}</div>
      )}

      {articles.map((article, index) => (
        <ArticlePreview article={article} key={index} />
      ))}
    </div>
  )
}
