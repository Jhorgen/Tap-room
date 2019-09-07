import React from 'react';
import { Image } from 'react-bootstrap'
import CoorsLogo from '../img/coors.png'

function Coors(){
  var myStyle = {
    height: '200px',
    width: '200px',
  }
  return (
    <Image style={myStyle} src={CoorsLogo} rounded />
  );
}

export default Coors;
