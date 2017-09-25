import React, { Component } from 'react'

class Header extends Component {

  render () {
    return (
      <header>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#!" className="brand-logo">Readable</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html"><i className="material-icons left">search</i>Link with Left Icon</a></li>
              <li><a href="badges.html"><i className="material-icons right">view_module</i>Link with Right Icon</a></li>
            </ul>
          </div>
        </nav>
        
      </header>
    )
  }
}

export default Header