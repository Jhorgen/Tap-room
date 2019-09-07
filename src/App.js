import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegListMain from './components/KegListMain'
import { Container, Row, Col } from 'react-bootstrap'



function App() {
  return (
    <div className="App">

      <UserNav/>
  <Row>
    <Col md={2}>
    <KegListMain/>
    </Col>
  </Row>


</div>

  );
}

export default App;
