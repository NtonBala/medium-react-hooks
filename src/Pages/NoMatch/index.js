import React from 'react'
import {useTranslation} from 'react-i18next'

export const NoMatch = () => {
  const {t} = useTranslation()

  return (
    <div
      style={{display: 'flex', justifyContent: 'center', padding: '200px 0'}}
    >
      <h2>{t('common.pageNotFound')}</h2>
    </div>
  )
}
