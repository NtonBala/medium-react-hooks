import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {routes} from 'Routes/constants'
import {useFetch} from 'Hooks'
import {PATHS} from 'API/paths'

export const Authentication = props => {
  const {t} = useTranslation()
  const isLogin = props.match.path === routes.login
  const pageTitle = isLogin ? t('common.signIn') : t('common.signUp')
  const descriptionLink = isLogin ? routes.register : routes.login
  const descriptionText = isLogin
    ? t('auth.needAccount')
    : t('auth.haveAccount')
  const apiUrl = isLogin ? PATHS.login : PATHS.register
  const [{isLoading, response, error}, doFetch] = useFetch(apiUrl)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = e => {
    const user = isLogin ? {email, password} : {username, email, password}

    e.preventDefault()
    doFetch({
      method: 'post',
      data: {user},
    })
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h2 className="text-xs-center">{pageTitle}</h2>

            <p className="text-xs-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset>
                {!isLogin && (
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder={t('common.username')}
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </fieldset>
                )}

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder={t('common.email')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder={t('common.password')}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isLoading}
                >
                  {pageTitle}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
