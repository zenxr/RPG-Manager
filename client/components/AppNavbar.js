import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  Button,
  MenuItem
} from 'react-bootstrap'

class AppNavbar extends Component {
  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">DnD App</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Navigation" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Profile</MenuItem>
              <MenuItem eventKey={3.2}>Characters</MenuItem>
              <MenuItem eventKey={3.3}>Log In</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Sign Out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
