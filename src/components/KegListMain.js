import React from 'react';
import KegList from './KegList'

function KegListMain () {
  var textStyle = {
    marginTop: '85px',
    marginBottom: '48px',

  }

  var buttonStyle = {
    marginTop: '60px',
    marginBottom: '50px'
  }
  return(
    <div>
    <div style={textStyle}>
    </div>
    <KegList/>
    <div style={buttonStyle}>
    </div>
    </div>
  );
}
export default KegListMain
