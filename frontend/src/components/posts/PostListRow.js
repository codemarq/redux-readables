import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router'
import timestampFormat from '../../utils/timestampFormat'
// import FaCommentsO from 'react-icons/lib/fa/coments-o'
// import FaCommentsO from 'react-icons/lib/fa/coments-o'

const PostListRow = ({post}) => {
  return (
    <li className="list-group-item card row">
      <div className="card-body">
        <div className="col-4">
          <h5 className="card-subtitle mb-2 text-muted right">
            <p>{post.author}</p>
            <p>{timestampFormat(post.timestamp)}</p>
          </h5>
        </div>
        <div className="col-8">     
          <h4 className="card-title">{post.title}</h4>
          <div className="btn-group" role="group" aria-label="vote buttons group">
            <button type="button" className="btn btn-secondary" aria-label="thumbs-up, to vote up this post">
             Vote Up
            </button>
            <button type="button" className="btn btn-secondary disabled" aria-label="displayed votescore">
              <span>{post.voteScore}</span>
            </button>
            <button type="button" className="btn btn-secondary" aria-label="thumbs-down, to vote down this post">
              Vote Down
            </button>
          </div>
          <p className="card-text">{post.body}</p>

      </div>
          <button type="button" className="btn btn-outline-primary" aria-label="view all comments">
            <span>View all Comments</span>
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