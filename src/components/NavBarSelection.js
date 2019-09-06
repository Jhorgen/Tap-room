import React from 'react';

function NavBarSelection(){

  var myStyle = {
    float: 'left',
    display: 'inline-block',
    marginLeft: '150px'
  }

  var myStyle2 = {
    float: 'right',
    display: 'inline-block',
    marginRight: '150px'
  }

  var myStyle3 = {
    float: 'center',
    display: 'inline-block'
  }


  return (

    <div className='Container'>
    <div style={myStyle}><h2>test</h2></div>
    <div style={myStyle2}><h2>test</h2></div>
    <div style={myStyle3 }><h2>test</h2></div>
    </div>

  );
}

export default NavBarSelection;
