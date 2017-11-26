import React from 'react'
import { Button } from 'react-bootstrap/lib'
// import { Link } from 'react-router-dom'

const Header = (props) => {
  const { categories, openNewPost } = props
  if (categories.length === 0) {
    return <p>Unable to load Categories...</p>
  }

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-2">
        <div>
          <h1>Post-it!</h1>
          <ul className="right hide-on-med-and-down">
            <li><Button className='waves-effect waves light btn-large blue-grey darken-1'>Sort by Category<i className="material-icons left">sort</i></Button></li>
            <li>
            <Button 
              className='modal-trigger waves-effect waves light btn-large blue-grey darken-1'
              onClick={openNewPost}
              data-target='newPostModal'
              >
              <i className="material-icons right">add</i>Create a New Post</Button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header