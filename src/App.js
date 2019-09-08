import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegListMain from './components/KegListMain'
import { Container, Row, Col } from 'react-bootstrap'
import BeerBackground1 from './components/BeerBackgroundImg'
import Sidebar from './components/Sidebar'



function App() {
  return (
    <div className="App">

      <UserNav/>
      <Container>
        <BeerBackground1/>
        <Sidebar/>
      </Container>

  <Container>
      <KegListMain/>
    </Container>
  </div>

  );
}

export default App;
