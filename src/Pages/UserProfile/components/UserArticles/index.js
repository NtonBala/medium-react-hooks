import React from 'react'

import {getPaginator} from 'Utils'

export const UserArticles = ({username, location, isFavorites}) => {
  const {offset, currentPage} = getPaginator(location.search)
  console.log(offset, currentPage)

  return <div>User Articles</div>
}
