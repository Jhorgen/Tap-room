import React, {Component} from 'react';
import { Button, Collapse } from 'react-bootstrap'
import PropTypes from "prop-types";
import Coors from './CoorsLogo';
import EditKeg from './EditKegForm.js'
import KegList from './KegList'

var imgStyle= {
float: 'right'
}

export default class Keg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    let temp = !this.state.clicked
    this.setState ({
      clicked: temp
    })
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
            <span style={imgStyle}>{this.props.img}</span>
            <ul>
            <li>{this.props.brand}</li>
            <li>{this.props.price}</li>
            <li>{this.props.abv}</li>
            <br></br>
            <br></br>
            <div className='add-dec-keg'>
            <button className='add-dec-keg' onClick={this.props.increaseRemainder}>Add pint</button>
            <button className='add-dec-keg' onClick={this.props.decreaseRemainder}>Sell pint</button>
            </div>
            <br></br>
            <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
            <p className='keg-remainder'>{this.props.remainder}</p>
            <br></br>
            <div className='edit-keg-button'><EditKeg/></div>
          </ul>
          </div>
        }
      </div>
    );

  }
}
Keg.propTypes = {
  remainder: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  img: PropTypes.string
}
