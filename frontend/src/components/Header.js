import React from 'react'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon, ButtonToolbar } from 'react-bootstrap/lib'
// import { Link } from 'react-router-dom'

const Header = (props) => {
  const { categories, openNewPost } = props
  if (categories.length === 0) {
    return <p>Unable to load Categories...</p>
  }

  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Post it!
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={1} title="Sort by Category" id="category-dropdown">
            <MenuItem eventKey={1.1}>React</MenuItem>
            <MenuItem eventKey={1.2}>Redux</MenuItem>
            <MenuItem eventKey={1.3}>Udacity</MenuItem>
          </NavDropdown>
          <NavItem>
            <ButtonToolbar>
              <Button onClick={openNewPost}><Glyphicon glyph='plus'/> New Post</Button>
            </ButtonToolbar>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header