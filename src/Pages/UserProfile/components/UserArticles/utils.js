import {stringify} from 'query-string'

import {ARTICLES_LIMIT} from 'Constants'
import {PATHS} from 'API'

export const getApiUrl = ({username, offset, isFavorites}) => {
  const params = isFavorites
    ? {limit: ARTICLES_LIMIT, offset, favorited: username}
    : {limit: ARTICLES_LIMIT, offset, author: username}

  return `${PATHS.articles}?${stringify(params)}`
}
