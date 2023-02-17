import React, {useContext, useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

import {BackendErrorMessages} from 'Components'
import {PATHS} from 'API'
import {useFetch} from 'Hooks'
import {CurrentUserContext, SET_AUTHORIZED, LOGOUT} from 'Contexts'
import {useLocalStorage} from 'Hooks'

export const Settings = () => {
  const {t} = useTranslation()
  const [currentUserState, dispatch] = useContext(CurrentUserContext)
  const apiUrl = PATHS.currentUser
  const [{response, error}, doFetch] = useFetch(apiUrl)
  const [image, setImage] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setToken] = useLocalStorage('token')

  const handleSubmit = e => {
    e.preventDefault()
    doFetch({
      method: 'put',
      data: {
        user: {
          ...currentUserState.currentUser,
          image,
          username,
          bio,
          email,
          password,
        },
      },
    })
  }

  const logout = e => {
    e.preventDefault()
    setToken('')
    dispatch({type: LOGOUT})
  }

  useEffect(() => {
    if (!currentUserState.currentUser) {
      return
    }

    setImage(currentUserState.currentUser.image)
    setUsername(currentUserState.currentUser.username)
    setBio(currentUserState.currentUser.bio)
    setEmail(currentUserState.currentUser.email)
  }, [currentUserState.currentUser])

  useEffect(() => {
    if (!response) {
      return
    }

    dispatch({type: SET_AUTHORIZED, payload: response.user})
  }, [dispatch, response])

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
                    value={image}
                    onChange={e => setImage(e.target.value)}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('common.username')}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder={t('settings.bioPlaceholder')}
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                  ></textarea>
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('common.email')}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
              </fieldset>

              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder={t('common.password')}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
