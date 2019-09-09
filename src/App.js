import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegListMain from './components/KegListMain'
import { Container, Row, Col } from 'react-bootstrap'
import BeerBackground1 from './components/BeerBackgroundImg'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewKeg from './components/NewKegForm'


const Home = () => (
      <div>
        Home
      </div>
    )

    const About = () => (
      <div>
        About
      </div>
    )



const Routes = () => {
  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/NewKeg">
        <button>About</button>
      </Link>

    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
<Routes/>
        <Route exact path="/" component={UserNav} />
        <Route exact path="/addKeg" component={NewKeg} />
        <BeerBackground1/>
        <Sidebar/>
        <KegListMain/>

      </div>
    </Router>
  );
}

export default App;
