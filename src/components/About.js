import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserNav from './UserNav'

var myStyle = {
  float: 'left',
  backgroundColor: 'coral'
}

function About(){


  return (

<div>
<UserNav/>
<h3>tresaesadnalkdjsaldjjadjlsajdjljdlsajdlnjlkdlksadjdlksadsadlsajdlksajdlksadjksadsajdksajdkajdlakjdlaksjdlkasjdlksajdlaknjdlksajdsakjdlksajdjksajdjdjddljsadjlsadjdsajdlkjdksajdlksajdlksajdsalkjdlsajdlksajdlksajdlksajdsajdsadjlksajdlksajdsajdksajdsajdlksajdlksajdlksajdlksajdsalkjdlksajdsadjsalkjdsalkjdsajdlksajdlksajdlksajdlksadjsalkjdlksajdlksajdlksajdlksajdlksajdsajlkdjsadsalkjdlksajdsajdlkjsadjsalkdsalkdsajdsajdsajdsaldjsalkdjsalkdjksajdlksajdlksajda</h3>
<Link to='/'>Go back</Link>
</div>

  );
}

export default About;
