import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegList from './components/KegList'
import BeerBackground1 from './components/BeerBackgroundImg'
import Keg from './components/Keg';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NewKegForm from './components/NewKegForm'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      remainder: 124

    }
  }

  handleAddKegSubmission = (newKeg) => {
    console.log(newKeg);
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
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
      <BrowserRouter>
      <div>

        <Route exact path='/' render={()=><UserNav />} />
        <Route path='/newKeg' render={()=><NewKegForm onNewKegCreation={this.handleAddKegSubmission} />} />
        <Route path='/keglist' render={()=><KegList/>} />
      <div><button onClick={this.increaseRemainder}>Add pint</button></div>
      <div><button onClick={this.decreaseRemainder}>Sell pint</button></div>
        <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
      </div>


      <BeerBackground1/>

      <Keg increaseRemainder={this.increaseRemainder} decreaseRemainder={this.decreaseRemainder}/>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
