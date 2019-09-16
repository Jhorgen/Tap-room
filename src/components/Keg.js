import React, {Component} from 'react';
import { Button, Collapse } from 'react-bootstrap'
import PropTypes from "prop-types";
import Coors from './CoorsLogo';
import EditKeg from './EditKegForm.js'
import KegList from './KegList'
import { Link } from 'react-router-dom';

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
            <hr></hr>
            <ul>
            <li>Brand: {this.props.brand}</li>
            <li>Price: ${this.props.price}.00</li>
            <li>ABV: {this.props.abv}%</li>
            <br></br>
            <hr></hr>

          <div className='add-dec-keg'>
            <button className='add-dec-keg' onClick={this.increaseRemainder}>Add pint</button>
            <button className='add-dec-keg' onClick={this.decreaseRemainder}>Sell pint</button>
            </div>
            <div className='remainder-value'>
            <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
            <h4 className='remainder-value'>{this.state.remainder}</h4>
            <p className='keg-remainder'>{this.props.remainder}</p>
            </div>
          <hr></hr>
            <Link className='add-keg-link' to='editkeg'>
            <div className='edit-keg-button'>Edit Keg</div>
            </Link>
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
