import React from 'react'
import {useTranslation} from 'react-i18next'

export const Article = () => {
  const {t} = useTranslation()

  return <div>{t('article.title')}</div>
}
