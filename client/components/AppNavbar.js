import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
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
      <div className = "Navbar Container">
        <Navbar>
          <Navbar.Header>
            <LinkContainer  to="/">
              <Navbar.Brand>DnD App</Navbar.Brand>
            </LinkContainer>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/signup">
              <NavItem>
                Sign Up
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>
                Log in
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/profile_dev">
              <NavItem>
                Profile
              </NavItem>
            </LinkContainer>
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
