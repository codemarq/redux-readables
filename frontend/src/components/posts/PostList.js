import React, { PropTypes } from 'react'
import PostListRow from './PostListRow'

const PostList = ({posts}) => {
  return (
    <ul className="list-group">
      {posts.map(post => <PostListRow key={post.id} post={post} />)}
    </ul>
  )
}

PostList.propTypes = {
  // myProp: PropTypes.string.isRequired
  posts: PropTypes.array.isRequired
}

export default PostList