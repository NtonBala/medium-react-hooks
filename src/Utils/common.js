import {parse} from 'query-string'

import {ARTICLES_LIMIT} from 'Constants'

export const range = (start, end) =>
  [...Array(end - start + 1).keys()].map(el => el + start)

export const getPaginator = (search, limit = ARTICLES_LIMIT) => {
  const {page} = parse(search)
  const currentPage = page ? Number(page) : 1
  const offset = currentPage * limit - limit

  return {currentPage, offset}
}

export const formatDate = dateString => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formattedDate
}
