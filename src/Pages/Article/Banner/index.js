import React from 'react'
import {Link} from 'react-router-dom'

import {ROUTES} from 'Routes'

export const Banner = ({article: {title, author, createdAt}}) => {
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
        </div>
      </div>
    </div>
  )
}
