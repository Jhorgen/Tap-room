import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import SiteLogo from './NavLogo';
import NavBarSelection from './NavBarSelection'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


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
        <Link to='keglist'>here</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default UserNav;
