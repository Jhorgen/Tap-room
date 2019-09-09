import React from 'react';
import { Image } from 'react-bootstrap'
import Background from '../img/background.jpg'

var myStyle = {
  width: '75%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}
function BackDrop(){
  return (
    <Image style={myStyle} src={Background} rounded />
  );
}

export default BackDrop;
