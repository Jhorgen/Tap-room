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
        <Route exact path='/newkeg' render={()=><NewKegForm onNewKegCreation={this.handleAddKegSubmission} />} />
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

export default App;
