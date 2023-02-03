import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'

import {BackendErrorMessages} from 'Components'

export const ArticleForm = ({onSubmit, errors, initialValues}) => {
  const {t} = useTranslation()
  const [title, setTitle] = useState(initialValues.title || '')
  const [body, setBody] = useState(initialValues.body || '')
  const [description, setDescription] = useState(
    initialValues.description || ''
  )
  const [tagList, setTagList] = useState(initialValues.tagList || '')

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({foo: 'foo'})
    console.log('fields', title, body, description, tagList)
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <BackendErrorMessages backendErrors={errors} />

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('articleForm.titlePlaceholder')}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('articleForm.descriptionPlaceholder')}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder={t('articleForm.bodyPlaceholder')}
                    value={body}
                    onChange={e => setBody(e.target.value)}
                  ></textarea>
                </fieldset>

                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={t('articleForm.tagListPlaceholder')}
                    value={tagList}
                    onChange={e => setTagList(e.target.value)}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg pull-xs-right btn-primary"
                  >
                    {t('articleForm.submitButton')}
                  </button>
                </fieldset>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
