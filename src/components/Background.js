import React from 'react';
import { Image } from 'react-bootstrap'
import Background from '../img/background.jpg'
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';


function BackDrop(){
  var background = {backgroundSize : 'cover', width: '98%', margin: '.5rem', height: '100vh'};

  var textStyleMain = {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
  return (
  <div>
    <Image style={background} src={Background} rounded />
    <Row>
      <div className="full-size-menu">
        <Link className='menu-link text-white' to='keglist'>Keg list</Link>
        <Link className='menu-link text-white' to='about'>About us</Link>
        <Link className='menu-link text-white' to='contact'>Contact</Link>
      </div>
    </Row>
      <div className="responsive-menu">
        <ul style={{listStyle: 'none'}}>
        <li className="menu-link"><Link className='text-white' to='keglist'>Keg list</Link></li>
        <li className="mt-3 menu-link"><Link className='text-white' to='about'>About us</Link></li>
        <li className="mt-3 menu-link"><Link className='text-white' to='contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default BackDrop;
