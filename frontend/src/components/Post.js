import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className="col s12 m7">
        <div className="card horizontal blue-grey darken-1">
          <div className='card-content white-text'>
            <span><h3>voteScore</h3></span>
            <span><h4>voteScore</h4></span>
          </div>
          <div className="card-stacked">
            <div className="card-content white-text">
              <h3 className="header white-text">Post.title</h3>
              <h4 className='header white-text'>Post.author</h4>
              <p>Post.body</p>
            </div>
            <div className="card-action">
              <button className='btn'><i className='material-icons'>comment</i></button>
              <button className='btn'><i className='material-icons'>exposure_plus_1</i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post