import React from 'react';
import NewKegForm from './NewKegForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var myStyle = {
  float: 'left',
  backgroundColor: 'coral'
}

function NewKeg(){

  return (
    <Router>
<div>

<Route exact path="/NewKeg" component={NewKegForm} />
<Link to="/NewKeg">
<button>Search tweets</button>
</Link>

</div>
</Router>
  );
}

export default NewKeg;
