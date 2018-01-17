import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const PostListRow = ({post}) => {
  return (
    <tr>
      <td><a href={post.id} target="_blank">Watch</a></td>
      <td><Link to={'/post/' + post.id}>{post.title}</Link></td>
      <td>{post.author}</td>
      <td>{post.category}</td>
      <td>{post.body}</td>
    </tr>
  )
}

PostListRow.propTypes = {
  // myProp: PropTypes.string.isRequired
  post: PropTypes.object.isRequired
}

export default PostListRow