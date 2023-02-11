import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'
import {CurrentUserContext} from 'Contexts'

export const Banner = ({
  article: {title, author, createdAt, slug},
  deleteArticle,
}) => {
  const {t} = useTranslation()
  const [currentUserState] = useContext(CurrentUserContext)
  const isAuthor =
    Boolean(currentUserState.isLoggedIn) &&
    author.username === currentUserState.currentUser.username

  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>

        <div className="article-meta">
          <Link to={`${ROUTES.profiles}/${author.username}`}>
            <img src={author.image} alt="" />{' '}
          </Link>

          <div className="info">
            <Link to={`${ROUTES.profiles}/${author.username}`}>
              {author.username}
            </Link>

            <span className="date">{createdAt}</span>
          </div>

          {isAuthor && (
            <span>
              <Link
                className="btn btn-outline-secondary btn-sm"
                to={`${ROUTES.articles}/${slug}/edit`}
              >
                <i className="ion-edit" />
                &nbsp;
                {t('article.edit')}
              </Link>
              &nbsp;
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={deleteArticle}
              >
                <i className="ion-trash-a" />
                &nbsp;
                {t('article.delete')}
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
