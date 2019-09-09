import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegListMain from './components/KegListMain'
import BeerBackground1 from './components/BeerBackgroundImg'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="App">
      <UserNav/>
      <BeerBackground1/>
      <Sidebar/>
      <KegListMain/>
    </div>
  );
}

export default App;
