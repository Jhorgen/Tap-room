import React from 'react';
import EditKeg from './EditKeg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const About = () => (
  <div>
    About
  </div>
)

const Routes = () => {
  return (
    <div>
      <Link to="/EditKeg">
        <button>Edit Keg</button>
      </Link>

    </div>
  );
};

function EditKegForm(){

  return (
    <Router>
<div>
<Routes/>
<Route exact path="/EditKeg" component={EditKeg} />
</div>
</Router>
  );
}

export default EditKegForm;
