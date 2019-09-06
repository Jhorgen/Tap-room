import React, {Component} from 'react';
import { Button, Collapse } from 'react-bootstrap'
import PropTypes from "prop-types";

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
    <button>
    onClick={() => this.handleClick()}
    >
    {this.props.question}
    </button>
    { this.state.clicked &&

      <div id="example-collapse-text">
      {this.props.answer}
      </div>


    }
    </div>
  );
  Keg.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }
}


}
