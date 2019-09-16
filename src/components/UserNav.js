import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import SiteLogo from './NavLogo';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


function UserNav(){

  var myStyle = {
    backgroundColor: "coral",
    width: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '8px'
  }


  return (
    <div>
    <Navbar style={myStyle} expand="lg">
      <Navbar.Brand href="#home"><SiteLogo/></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className='nav-links'>
        <Link className='link' to='keglist'>Keg list</Link>
        <Link className='link' to='about'>About us</Link>
        <Link className='link' to='contact'>Contact</Link>
        </div>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default UserNav;
