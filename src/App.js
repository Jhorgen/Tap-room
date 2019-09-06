import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import { Container, Col, Row } from 'react-bootstrap'
import KegList from './components/KegList'


function App() {
  return (
    <div className="App">



     <UserNav/>

     <KegList/>



</div>

  );
}

export default App;
