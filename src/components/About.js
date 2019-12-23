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
<h3>OUR MISSION <br></br><br></br>
PDX BREWERY CREATES WORLD-CLASS BEER AND FOOD USING SUSTAINABLE BUSINESS PRACTICES THAT PROTECT OUR ENVIRONMENT AND INSPIRE OUR COMMUNITY.
<br></br>
<br></br>
With locally-sourced, organic and Salmon-Safe hops, our 20-barrel brewery produces 13,500 barrels of beer a year for our two brewpubs and for distribution throughout the Northwest. Our pubs serve our beer and fresh food, in sustainably-built and operated buildings that have a relaxed, family-friendly atmosphere.

PDX is family-owned and operated, employing over 160 people in the Pacific Northwest. We serve our neighborhoods through donations, profit sharing and volunteering with local, non-profit organizations. From composting to salvaged materials, and from pervious pavers to hand dryers, we have made every effort to protect our future with thoughtful alternatives. We are the first Certified B Corporation brewery in the Pacific Northwest and our campus is the first Salmon-Safe Certified brewery in the world.</h3>
<Link className='add-keg-link' to='/'>Go back</Link>
</div>

  );
}

export default About;
