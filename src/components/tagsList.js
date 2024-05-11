import React from "react"
import { Link } from "gatsby"

const TagsList = ({ tags }) => {
  return (
    <div className="tags">
      <ul className="flat">
        {tags.map(tagName => (
          <li>
            <Link to={`/tags/${tagName}`}>{tagName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsList
