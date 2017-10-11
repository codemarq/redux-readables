import React from 'react'
import { Link } from 'react-router-dom'

const Header = function ({ categories }) {
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
              <li><Link to="/sortByCat" className='waves-effect waves light btn-large blue-grey darken-1'><i className="material-icons left">sort</i>{console.log(categories)} </Link></li>
              <li><Link to="/create"><i className="material-icons right">add</i>Create a New Post</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
  )
}

export default Header