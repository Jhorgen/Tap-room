import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';


class Keg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      remainder: 124,
      kegExists: '',
      deleteCheck: ''
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

  deleteKegCheck = () => {
    this.setState({deleteCheck: <div><p>Are you sure?</p>
    <Button onClick={() => this.deleteKegConfirm()}>Yes</Button>
    <Button onClick={() => this.deleteKegDeny()}>No</Button>
  </div> })
}

deleteKegConfirm = () => {
  this.setState({kegExists: 'none'});
}

deleteKegDeny = () => {
  console.log('ran');
  this.setState({deleteCheck: ''});
}



render() {
  return(
    <div>
      <Button style={{display: this.state.kegExists}} className='myButton'
        onClick={() => this.handleClick()}
        >
        {this.props.name}
      </Button>
      <div>
        <div className='d-flex justify-content-center'>
          { this.state.clicked &&
            <div style={{display: this.state.kegExists}} className='myInfo' id="example-collapse-text">
              <hr></hr>
              <ul>
                <li>Brand: {this.props.brand}</li>
                <li>Price: ${this.props.price}.00</li>
                <li>ABV: {this.props.abv}%</li>
                <br></br>
                <hr></hr>

                <div className='add-dec-keg'>
                  <Button className='add-dec-keg' onClick={this.increaseRemainder}>Add pint</Button>
                  <Button className='add-dec-keg' onClick={this.decreaseRemainder}>Sell pint</Button>
                </div>
                <div className='remainder-value'>
                  <meter low={5} value={this.state.remainder + ''} min='0' low='50' max='124'></meter>
                  <h4 className='remainder-value'>{this.state.remainder}</h4>
                  <p className='keg-remainder'>{this.props.remainder}</p>
                </div>
                <hr></hr>
                <Row>
                  <Link className='add-keg-link' to={{pathname: 'editkeg', kegIndex: this.props.kegIndex}}>
                    <div className='edit-keg-Button'>Edit keg</div>
                  </Link>
                  <Button onClick={() => this.deleteKegCheck()}>Delete keg</Button>
                  {this.state.deleteCheck}
                </Row>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  kegIndex: PropTypes.number.isRequired,
}

export default Keg;
