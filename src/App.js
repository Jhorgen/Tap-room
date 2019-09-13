import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegList from './components/KegList'
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NewKegForm from './components/NewKegForm'
import About from './components/About'
import Contact from './components/Contact'



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
    console.log(newMasterKegList);
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
        <Route path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddKegSubmission} />} />
        <Route path='/keglist' render={()=><KegList/>} />
        <Route path='/about' render={()=><About/>} />
        <Route path='/contact' render={()=><Contact/>} />
      </div>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
