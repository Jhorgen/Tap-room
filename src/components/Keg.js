import React, {Component} from 'react';
import { Button, Collapse } from 'react-bootstrap'
import PropTypes from "prop-types";
import Coors from './CoorsLogo';

var myButton = {
  backgroundColor: '#4a4a4a',
  color: 'white',
  width: '35%',
  height: '60px',
  border: 'none',
  marginBottom: '10px',
  fontSize: '25px',
  textAlign: 'center',
  borderRadius: '15px',

}

var myInfo = {
  backgroundColor: '#4a4a4a',
  color: 'white',
  width: '34%',
  fontSize: '25px',

  textAlign: 'left',
  marginBottom: '15px',
  padding: '10px',
  borderRadius: '15px',

}

var coorsStyle = {
  float: 'right'
}



export default class Keg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
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
        <button style={myButton}
          onClick={() => this.handleClick()}
          >
          {this.props.name}
        </button>
        { this.state.clicked &&
          <div style={myInfo} id="example-collapse-text">
            <div style={coorsStyle}><Coors/></div>
            <ul>
            <li>{this.props.brand}</li>
            <li>{this.props.price}</li>
            <li>{this.props.abv}</li>
            <br></br>
            <h4>{this.props.remainder}</h4>
          </ul>
          </div>


        }
      </div>
    );
    Keg.propTypes = {
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      abv: PropTypes.number.isRequired,
      remainder: PropTypes.number.isRequired
    }
  }


}
