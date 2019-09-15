import React, {Component} from 'react';
import { Button, Collapse } from 'react-bootstrap'
import PropTypes from "prop-types";
import Coors from './CoorsLogo';
import EditKeg from './EditKegForm.js'
import KegList from './KegList'

var imgStyle= {
float: 'right'
}

class Keg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      remainder: 124
    }
  }

  handleClick = () => {
    let temp = !this.state.clicked
    this.setState ({
      clicked: temp
    })
  }

  increaseRemainder = () => {
    this.setState({remainder: this.state.remainder + 1});
  }

  decreaseRemainder = () => {
    this.setState({remainder: this.state.remainder -1});
  }

  render() {
    return(
      <div>
        <button className='myButton'
          onClick={() => this.handleClick()}
          >
          {this.props.name}
        </button>
        { this.state.clicked &&
          <div className='myInfo' id="example-collapse-text">
            <ul>
            <li>{this.props.brand}</li>
            <li>{this.props.price}</li>
            <li>{this.props.abv}</li>
            <br></br>
            <br></br>

          <div className='add-dec-keg'>
            <button className='add-dec-keg' onClick={this.increaseRemainder}>Add pint</button>
            <button className='add-dec-keg' onClick={this.decreaseRemainder}>Sell pint</button>
            </div>
            <div className='remainder-value'>
            <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
            <h4 className='remainder-value'>{this.state.remainder}</h4>
            <p className='keg-remainder'>{this.props.remainder}</p>
            </div>
            <div className='edit-keg-button'><EditKeg/></div>
          </ul>
          </div>
        }
      </div>
    );
  }
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
}

export default Keg;
