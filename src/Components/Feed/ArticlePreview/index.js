import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'

export const ArticlePreview = ({
  article: {author, createdAt, slug, title, description, tagList},
}) => {
  const {t} = useTranslation()

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`${ROUTES.profiles}/${author.username}`}>
          <img src={author.image} alt="" />
        </Link>

        <div className="info">
          <Link to={`${ROUTES.profiles}/${author.username}`} className="author">
            {author.username}
          </Link>

          <span className="date">{createdAt}</span>
        </div>
      </div>

      <Link to={`${ROUTES.articles}/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>

        <span>{t('article.readMore')}</span>

        <ul className="tag-list">
          {tagList.map(tag => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  )
}
