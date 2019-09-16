import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserNav from './UserNav'

var myStyle = {
  float: 'left',
  backgroundColor: 'coral'
}

function Contact(){


  return (

<div>
<UserNav/>
<h3 className='contact'>
  <ul>
  <li>PDX URBAN BREWERY</li> <br></br>
POWELL PUB <br></br>
  2944 SE Powell Blvd.,
  Portland, Oregon 97202
  Phone: (503) 232-4677 (HOPS) <br></br>
  Email: PDX@PDXbeer.com

<br></br>
<br></br>

  <li>WILLIAMS</li> <br></br>
  3947 N. Williams Ave.,
  Portland, OR 97227
  Phone: (503) 287-6258 (MALT)
  Email: PDX@PDXbeer.com

  <br></br>
  <br></br>

  <li>VANCOUVER</li> <br></br>
  17707 SE Mill Plain Blvd.,
  Vancouver, WA 98683 <br></br>
Phone: (360) 828-5139 <br></br>
  Email: vancouverpub@PDXbeer.com

  <br></br>
  <br></br>

  <li>PDX AIRPORT</li> <br></br>
  7000 NE Airport Way, Concourse E
  Portland, OR 97218 <br></br>
Phone: (571) 982-0358 <br></br>
  Email: PDX@PDXbeer.com
</ul>
</h3>
<Link className='add-keg-link' to='/'>Go back</Link>
</div>

  );
}

export default Contact;
