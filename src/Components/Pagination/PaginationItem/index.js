import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

export const PaginationItem = ({page, currentPage, url: urlProp}) => {
  const liClasses = classNames({
    'page-item': true,
    active: currentPage === page,
  })
  const queryParam = `page=${page}`
  const url = urlProp
    ? `${urlProp}?${queryParam}`
    : location => `${location.pathname}?${queryParam}`

  return (
    <li className={liClasses}>
      <Link to={url} className="page-link">
        {page}
      </Link>
    </li>
  )
}
