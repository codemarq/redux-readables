import React, { PropTypes } from 'react'
import PostListRow from './PostListRow'

const PostList = ({posts}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {posts.map(post => <PostListRow key={post.id} post={post}/>)}
      </tbody>
    </table>
  )
}

PostList.propTypes = {
  // myProp: PropTypes.string.isRequired
  posts: PropTypes.array.isRequired
}

export default PostList