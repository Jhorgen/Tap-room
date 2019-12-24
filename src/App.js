import React, { Component } from 'react';
import './App.css';
import KegList from './components/KegList'
import { BrowserRouter, Route } from 'react-router-dom';
import NewKegForm from './components/NewKegForm'
import PropTypes from "prop-types";
import EditKegForm from './components/EditKegForm'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {name: 'Coors Light', brand: 'Coors', price: '5', abv: '5'},
        {name: 'Lagunitas Imperial Stout', brand: 'Lagunitas Brewing Company', price: '7', abv: '9'},
        {name: 'Ninkasi Tricerahops Double IPA', brand: 'Ninkasi', price: '5', abv: '7'}
      ],
    }
  }

  handleAddKegSubmission = (newKeg) => {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleEdit = (newKeg, kegIndex) => {
    var newMasterKegList = this.state.masterKegList;
    newMasterKegList[kegIndex] = newKeg;
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Route exact path='/' render={()=><KegList masterKegList={this.state.masterKegList}/>} />
        <Route exact path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddKegSubmission} />} />
        <Route exact path='/editkeg' render={(props)=><EditKegForm onKegEdit={this.handleEdit} kegIndex={props.location.kegIndex}/>} />
        <p>{this.newMasterKegList}</p>
      </div>
      </BrowserRouter>
    </div>
  );
}
}

App.propTypes = {
  remainder: PropTypes.number
}

export default App;
