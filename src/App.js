import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegListMain from './components/KegListMain'
import { Container } from 'react-bootstrap'



function App() {
  return (
    <div className="App">

      <UserNav/>
  
    <KegListMain/>


</div>

  );
}

export default App;
