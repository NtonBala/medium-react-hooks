import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import {ROUTES} from 'Routes'
import {TagList, AddToFavorites} from 'Components'
import {CurrentUserContext} from 'Contexts'

export const ArticlePreview = ({
  article: {
    author,
    createdAt,
    slug,
    title,
    description,
    tagList,
    favorited,
    favoritesCount,
  },
}) => {
  const {t} = useTranslation()
  const [currentUserState] = useContext(CurrentUserContext)

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

        {currentUserState.isLoggedIn && (
          <div className="pull-xs-right">
            <AddToFavorites
              isFavorite={favorited}
              favoritesCount={favoritesCount}
              articleSlug={slug}
            />
          </div>
        )}
      </div>

      <Link to={`${ROUTES.articles}/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>

        <span>{t('common.readMore')}</span>

        <TagList tags={tagList} />
      </Link>
    </div>
  )
}
