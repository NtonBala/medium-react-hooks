import React from 'react'
import {useTranslation} from 'react-i18next'

export const Banner = () => {
  const {t} = useTranslation()

  return (
    <div className="banner">
      <div className="container">
        <h1>{t('globalFeed.bannerTitle')}</h1>
        <p>{t('globalFeed.bannerDescription')}</p>
      </div>
    </div>
  )
}
