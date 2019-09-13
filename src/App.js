import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegList from './components/KegList'
import BeerBackground1 from './components/BeerBackgroundImg'
import Sidebar from './components/Sidebar'
import Keg from './components/Keg';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';






class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      remainder: 124
    }
  }

  handleAddKegSubmission = (newKeg) => {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  increaseRemainder = () => {
    this.setState({remainder: this.state.remainder + 1});
  }

  decreaseRemainder = () => {
    this.setState({remainder: this.state.remainder -1});
  }



  render() {
  return (
    <div className="App">

      <div>
      <h2>Remainder: {this.state.remander}</h2>
      <div><button onClick={this.increaseRemainder}>Add pint</button></div>
      <div><button onClick={this.decreaseRemainder}>Sell pint</button></div>
        <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
      </div>
      <UserNav/>
      <BeerBackground1/>
      <Sidebar/>
      <KegList onNewKegCreation={this.handleAddKegSubmission} remainder={this.state.remainder}/>

      <Keg increaseRemainder={this.increaseRemainder} decreaseRemainder={this.decreaseRemainder}/>
    </div>
  );
}
}

export default App;
