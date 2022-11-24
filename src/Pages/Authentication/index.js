import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {routes} from 'Routes/constants'

export const Authentication = () => {
  const {t} = useTranslation()

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h2 className="text-xs-center">{t('auth.login')}</h2>

            <p className="text-xs-center">
              <Link to={routes.register}>{t('auth.needAccount')}</Link>
            </p>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder={t('common.email')}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder={t('auth.password')}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  {t('common.signIn')}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
