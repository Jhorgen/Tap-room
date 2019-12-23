import React from 'react';
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

    <div style={myStyle}>
      <Link to='/'>
      <SiteLogo/>
      </Link>
    </div>
  );
}

export default UserNav;
