import React from "react"
import PropTypes from "prop-types"

const Post = ({ title, date, children }) => {
  return (
    <div className="post">
      <div className="post-header">
        <h1 className="title">{title}</h1>
        <div className="date">{date}</div>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post
