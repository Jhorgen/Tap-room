import React from 'react';
import NewKegForm from './NewKegForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

var myStyle = {
  float: 'left',
  backgroundColor: 'coral'
}

const New = () => (
  <div>
    New
  </div>
)

const Routes = () => {
  return (
    <div>
      <Link to="/New">
      </Link>

    </div>
  );
};

function NewKeg(){

  return (
    <Router>
<div>
<Routes/>
<Route exact path="/NewKeg" component={NewKegForm} />
</div>
</Router>
  );
}

export default NewKeg;
