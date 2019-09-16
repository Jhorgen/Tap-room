import React from 'react';
import './App.css';
import { Image } from 'react-bootstrap';
import UserNav from './components/UserNav'
import KegList from './components/KegList'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NewKegForm from './components/NewKegForm'
import About from './components/About'
import Contact from './components/Contact'
import BackDrop from './components/Background'
import PropTypes from "prop-types";
import EditKegForm from './components/EditKegForm'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],

    }
  }

  handleAddKegSubmission = (newKeg) => {
    console.log(newKeg);
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
    console.log(newMasterKegList);
  }

  handleEdit = (Keg) => {
    var newMasterKegList = this.state.masterKegList
    this.setState({masterKegList: newMasterKegList});
    console.log(newMasterKegList);
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route exact path='/' render={()=><UserNav />} />
        <Route exact path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddKegSubmission} />} />
        <Route exact path='/editkeg' render={()=><EditKegForm onKegEdit={this.handleEdit} />} />
        <Route exact path='/keglist' render={()=><KegList masterKegList={this.state.masterKegList}/>} />
        <Route exact path='/about' render={()=><About/>} />
        <Route exact path='/contact' render={()=><Contact/>} />
        <p>{this.newMasterKegList}</p>
      </div>
      <BackDrop/>
      </BrowserRouter>
    </div>
  );
}
}

App.propTypes = {
  remainder: PropTypes.number
}

export default App;
