import React from 'react'
import {useTranslation} from 'react-i18next'

export const Loading = props => {
  const {t} = useTranslation()

  return <div {...props}>{t('common.loading')}</div>
}
