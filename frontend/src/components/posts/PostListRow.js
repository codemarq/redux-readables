import React, { PropTypes } from 'react'
// import { Link } from 'react-router'
import timestampFormat from '../../utils/timestampFormat'

const PostListRow = ({post}) => {
  return (
    <li className="list-group-item">
      <div className="heading">
        <h3 className="title">{post.title}</h3>
      </div>
      <div className="body">
        {post.body}
      </div>
      <div className="footer">{post.author} at {timestampFormat(post.timestamp)}</div>
  {/* clearly the below can be abstracted out to a separate component, also need to fix the overall look.*/}
      <div className="btn-group" role="group" aria-label="vote buttons group">
        <button type="button" className="btn btn-success" aria-label="thumbs-up, to vote up this post">
          <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-primary disabled" aria-label="displayed votescore">
          <span>{post.voteScore}</span>
        </button>
        <button type="button" className="btn btn-danger" aria-label="thumbs-down, to vote down this post">
          <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
        </button>
        <button type="button" className="btn btn-primary" aria-label="comments">
          <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
        </button>
      </div>
    </li>
  )
}

PostListRow.propTypes = {
  // myProp: PropTypes.string.isRequired
  post: PropTypes.object.isRequired
}

export default PostListRow