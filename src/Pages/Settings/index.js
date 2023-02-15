import React, {useContext, useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Redirect} from 'react-router-dom'

import {BackendErrorMessages} from 'Components'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'
import {ROUTES} from 'Routes'
import {CurrentUserContext} from 'Contexts'

export const Settings = () => {
  const {t} = useTranslation()
  const [currentUserState] = useContext(CurrentUserContext)
  const apiUrl = PATHS.currentUser
  const [{response, error}, doFetch] = useFetch(apiUrl)

  const handleSubmit = () => {}
  const logout = () => {}

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{t('settings.title')}</h1>
            {error && <BackendErrorMessages backendErrors={error.errors} />}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('settings.profilePicturePlaceholder')}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('common.username')}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder={t('settings.bioPlaceholder')}
                  ></textarea>
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('common.email')}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder={t('common.password')}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  {t('settings.update')}
                </button>
              </fieldset>
            </form>

            <hr />
            <button className="btn btn-outline-danger" onClick={logout}>
              {t('settings.logout')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
