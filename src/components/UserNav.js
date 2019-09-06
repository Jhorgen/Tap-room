import React from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap'
import SiteLogo from './NavLogo';
import NavBarSelection from './NavBarSelection'

function UserNav(){

  var myStyle = {
    backgroundColor: "coral"
  }


  return (
    <Navbar style={myStyle} expand="lg">
      <Navbar.Brand href="#home"><SiteLogo/></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavBarSelection/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default UserNav;
