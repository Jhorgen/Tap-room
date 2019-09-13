import React from 'react';
import './App.css';
import UserNav from './components/UserNav'
import KegList from './components/KegList'
import BeerBackground1 from './components/BeerBackgroundImg'
import Sidebar from './components/Sidebar'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      remainder: 124,
    }
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
        <button onClick={this.increaseRemainder}>Add pint</button>
        <button onClick={this.decreaseRemainder}>Sell pint</button>
        <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
      </div>


      <UserNav/>
      <BeerBackground1/>
      <Sidebar/>
      <KegList remainder={this.state.remainder}/>
    </div>
  );
}
}

export default App;
