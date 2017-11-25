import React from 'react'
// import { Link } from 'react-router-dom'

const Header = function (props) {
  const { categories, newPost } = props
  if (categories.length === 0) {
    return <p>Unable to load Categories...</p>
  }

  return (
    <header>
      <nav>
        <div className="nav-wrapper blue-grey darken-2">
          <div className='container'>
            <a href="#!" className="brand-logo">Post-it!</a>
            <ul className="right hide-on-med-and-down">
              <li><button className='waves-effect waves light btn-large blue-grey darken-1'>Sort by Category<i className="material-icons left">sort</i></button></li>
              <li><button 
                className='modal-trigger waves-effect waves light btn-large blue-grey darken-1'
                onClick={newPost}
                data-target='newPostModal'
                ><i className="material-icons right">add</i>Create a New Post</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header