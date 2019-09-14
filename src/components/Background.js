import React from 'react';
import { Image } from 'react-bootstrap'
import Background from '../img/background.jpg'


function BackDrop(){
  return (
    <Image className='myStyle' src={Background} rounded />
  );
}

export default BackDrop;
