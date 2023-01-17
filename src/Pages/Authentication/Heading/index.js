import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'

export const Heading = ({isLoginView}) => {
  const {t} = useTranslation()
  const title = isLoginView ? t('common.signIn') : t('common.signUp')
  const descriptionText = isLoginView
    ? t('auth.needAccount')
    : t('auth.haveAccount')
  const descriptionLink = isLoginView ? ROUTES.register : ROUTES.login

  return (
    <>
      <h2 className="text-xs-center">{title}</h2>
      <p className="text-xs-center">
        <Link to={descriptionLink}>{descriptionText}</Link>
      </p>
    </>
  )
}
