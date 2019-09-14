import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Redirect } from 'react-router-dom';


var formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '250px',
  height: '200px',
  float: 'left'
}

var inputStyle = {
  fontSize: '20px'
}

var bodyStyle = {
  height: '130px',
  width: '400px',
  fontSize: '20px'
}

var buttonStyle = {
  fontSize: '15px',
  backgroundColor: 'coral',
  fontWeight: 'bolder',
  width: '100px'
}

class NewKegForm extends React.Component {
  constructor(props){
    super(props);

  this._name = null;
  this._brand = null;
  this._price = null;
  this._abv = null;
  this.state = {
    redirectToHome: false

  };
  this.handleNewKegFormSubmission = this.handleNewKegFormSubmission.bind(this);
}


  handleNewKegFormSubmission(event) {
    event.preventDefault();
    const profile_url = "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif";

    this.props.onNewKegCreation({name: this._name.value, brand: this._brand.value, price: this._price.value, abv: this._abv.value, profile_url: profile_url, id: v4()});
    this._name.value = '';
    this._brand.value = '';
    this._price.value = '';
    this._abv.value = '';
    this.setState({redirectToHome: true});
  }

render() {
  if (this.state.redirectToHome) {
  return <Redirect to='/keglist' />;
}
  return (
      <div>
        <form style={formStyle} onSubmit={this.handleNewKegFormSubmission}>

          <input style={inputStyle}
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {this._name = input;}}/>

          <input style={inputStyle}
              type='text'
              id='brand'
              placeholder='Brand'
              ref={(input) => {this._brand = input;}}/>

            <input style={inputStyle}
                type='number'
                id='price'
                placeholder='Price'
                ref={(input) => {this._price = input;}}/>

              <input style={inputStyle}
                  type='number'
                  id='abv'
                  placeholder='Abv'
                  ref={(input) => {this._abv = input;}}/>

        <button type='submit' style={buttonStyle}>Submit</button>
        </form>
      </div>
    );
  }
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
  export default NewKegForm;
