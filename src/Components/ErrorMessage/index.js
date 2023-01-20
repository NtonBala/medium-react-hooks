import React from 'react'
import {useTranslation} from 'react-i18next'

export const ErrorMessage = props => {
  const {t} = useTranslation()

  return <div {...props}>{t('errors.general')}</div>
}
