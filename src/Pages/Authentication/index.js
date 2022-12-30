import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {routes} from 'Routes/constants'
import {useFetch, useLocalStorage} from 'Hooks'
import {PATHS} from 'API/paths'
import {CurrentUserContext} from 'Contexts'
import {BackendErrorMessages} from 'Components'

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
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)
  const [, setToken] = useLocalStorage('token')
  const [, setCurrentUser] = useContext(CurrentUserContext)

  const handleSubmit = e => {
    const user = isLogin ? {email, password} : {username, email, password}

    e.preventDefault()
    setCurrentUser(state => ({
      ...state,
      isLoading: true,
    }))
    doFetch({
      method: 'post',
      data: {user},
    })
  }

  useEffect(() => {
    if (!response) return

    setToken(response.user.token)
    setIsSuccessfulSubmit(true)
    setCurrentUser(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }))
  }, [response, setCurrentUser, setToken])

  if (isSuccessfulSubmit) return <Redirect to={routes.main} />

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
              {error && <BackendErrorMessages backendErrors={error.errors} />}
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
