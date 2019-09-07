import React from 'react';
import { Image } from 'react-bootstrap'
import BeerBackground from '../img/beerbackground.jpg'

function BeerBackground1(){
  var myStyle = {
    height: '900px',
    width: '350px',
    float: 'right'
  }
  return (
    <Image style={myStyle} src={BeerBackground} rounded />
  );
}

export default BeerBackground1;
