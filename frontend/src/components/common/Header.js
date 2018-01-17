import React from 'react'
import { Link, IndexLink } from 'react-router'


const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="posts" activeClassName="active">Posts</Link>
    </nav>
  )
}

Header.propTypes = {
  // myProp: PropTypes.string.isRequired
  
}

export default Header