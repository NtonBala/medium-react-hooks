import React from 'react'

export const TagList = ({tags}) => {
  return tags.length > 0 ? (
    <ul className="tag-list">
      {tags.map(tag => (
        <li key={tag} className="tag-default tag-pill tag-outline">
          {tag}
        </li>
      ))}
    </ul>
  ) : null
}
