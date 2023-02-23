import React, {useState, useEffect} from 'react'
import {useTranslation} from 'react-i18next'

import {BackendErrorMessages} from 'Components'

export const ArticleForm = ({onSubmit, errors, initialValues}) => {
  const {t} = useTranslation()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [description, setDescription] = useState('')
  const [tagList, setTagList] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit({
      title,
      description,
      body,
      tagList: tagList.length > 0 ? tagList.split(' ') : [],
    })
  }

  useEffect(() => {
    if (!initialValues) {
      return
    }

    setTitle(initialValues.title)
    setDescription(initialValues.description)
    setBody(initialValues.body)
    setTagList(initialValues.tagList.join(' '))
  }, [initialValues])

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            {errors && <BackendErrorMessages backendErrors={errors} />}

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
