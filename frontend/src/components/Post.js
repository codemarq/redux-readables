import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className="col s12">
            <div className="card horizontal blue-grey darken-2">
              <div className='card-content white-text'>
                <span><h4>voteScore</h4></span>
                <span><h5>voteScore</h5></span>
              </div>
              <div className="card-stacked">
                <div className="card-content white-text">
                  <h4 className="header white-text">Post.title</h4>
                  <h5 className='header white-text'>Post.author</h5>
                  <p>Post.body</p>
                </div>
                <div className="card-action">
                  <button className='btn blue-grey darken-1'><i className='material-icons'>comment</i></button>
                  <button className='btn blue-grey darken-1'><i className='material-icons'>exposure_plus_1</i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post