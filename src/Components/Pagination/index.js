import React from 'react'

import {ARTICLES_LIMIT} from 'Constants'
import {range} from 'Utils'
import {PaginationItem} from './PaginationItem'

export const Pagination = ({
  total,
  limit = ARTICLES_LIMIT,
  url,
  currentPage,
}) => {
  const pagesCount = Math.ceil(total / limit)
  const pages = range(1, pagesCount)

  return (
    <ul className="pagination">
      {pages.map(page => (
        <PaginationItem
          key={page}
          page={page}
          currentPage={currentPage}
          url={url}
        />
      ))}
    </ul>
  )
}
