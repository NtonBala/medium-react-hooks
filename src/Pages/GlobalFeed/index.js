import React from 'react'
import {useTranslation} from 'react-i18next'

export const GlobalFeed = () => {
  const {t} = useTranslation()

  return <div>{t('globalFeed.title')}</div>
}
