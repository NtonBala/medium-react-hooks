import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import axios from 'axios'

import {routes} from 'Routes/constants'

export const Authentication = () => {
  const {t} = useTranslation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (!isSubmitting) return

    axios('https://conduit.productionready.io/api/users/login', {
      method: 'post',
      data: {
        user: {
          email,
          password,
        },
      },
    })
      .then(res => {
        console.log('success', res)
        setIsSubmitting(false)
      })
      .catch(err => {
        console.log('error', err)
        setIsSubmitting(false)
      })
  }, [email, isSubmitting, password])

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h2 className="text-xs-center">{t('auth.login')}</h2>

            <p className="text-xs-center">
              <Link to={routes.register}>{t('auth.needAccount')}</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset>
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
                    placeholder={t('auth.password')}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={isSubmitting}
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
