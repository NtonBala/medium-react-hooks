import React from 'react'
import {useTranslation} from 'react-i18next'

export const ErrorMessage = () => {
  const {t} = useTranslation()

  return <div>{t('errors.general')}</div>
}
