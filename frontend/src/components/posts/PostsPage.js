import React, { Component, PropTypes } from 'react'
import PostList from './PostList'
import { connect } from 'react-redux'

class PostsPage extends Component {
  constructor (props, context) {
    super (props, context)
  }

  render() {
    const {posts} = this.props
    return (
      <div>
        <h1>Posts</h1>
        <input
          type="submit"
          value="New Post"
          className="btn btn-primary"
          onClick={this.redirectToAddPostPage}
        />
        <PostList posts={posts} />
      </div>
    )
  }
}

PostsPage.propTypes = {
  // myProp: PropTypes.string.isRequired
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostsPage)