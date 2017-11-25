import React, { Component } from 'react'

class Post extends Component {
  render() {
    const { posts } = this.props
    
    return (
      <div className='container'>
      { posts.map(post => (
          <div className='row' key={post.id}>
            <div className="col s12">
              <div className="card horizontal blue-grey darken-2">
                <div className="card-stacked">
                  <div className="card-content white-text">
                    <h2 className="white-text">{post.title}</h2>
                    <h3 className='white-text'>By: {post.author}</h3>
                    <p>{post.body}</p>
                  </div>
                  <div className="card-action white-text">
                    <button className='btn blue-grey darken-1'><i className='material-icons'>comment</i></button>
                    <button className='btn blue-grey darken-1'><i className='material-icons'>thumb_up</i></button>
                     <span> Likes: {post.voteScore}</span>
                    <button className='btn blue-grey darken-1'><i className='material-icons'>thumb_down</i></button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        ))}

      </div>
    )
  }
}

export default Post