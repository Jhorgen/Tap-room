import React from 'react';
import { Image } from 'react-bootstrap'
import SiteLogo from '../img/navlogo.png'

function NavLogo(){
  var myStyle = {
    height: '200px',
    width: '400px',
  }
  return (
    <Image style={myStyle} src={SiteLogo} rounded />
  );
}

export default NavLogo;
