import React, { Component } from 'react';
/*
  import {
  Navbar,
  Container
} from 'react-bootstrap'

*/

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Button from 'react-bootstrap/lib/Button';
import MenuItem from 'react-bootstrap/lib/MenuItem';

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
