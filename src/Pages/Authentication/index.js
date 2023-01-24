import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'
import {PATHS} from 'API'
import {BackendErrorMessages} from 'Components'

import {Heading} from './Heading'
import {useAuthentication} from './hooks'

export const Authentication = props => {
  const {t} = useTranslation()
  const isLoginView = props.match.path === ROUTES.login
  const btnText = isLoginView ? t('common.signIn') : t('common.signUp')
  const apiUrl = isLoginView ? PATHS.login : PATHS.register
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [{isLoading, error, currentUserState}, doFetch] =
    useAuthentication(apiUrl)

  const handleSubmit = e => {
    const user = isLoginView ? {email, password} : {username, email, password}

    e.preventDefault()
    doFetch(user)
  }

  if (currentUserState.isLoggedIn) return <Redirect to={ROUTES.feed} />

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <Heading isLoginView={isLoginView} />

            <form onSubmit={handleSubmit}>
              {error && <BackendErrorMessages backendErrors={error.errors} />}
              <fieldset>
                {!isLoginView && (
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
                  {btnText}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
