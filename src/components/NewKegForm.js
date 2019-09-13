import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

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

function NewKegForm(props){

  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    const profile_url = "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif";

    props.onKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, profile_url: profile_url, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }

  return (
      <div>
        <form style={formStyle} onSubmit={handleNewKegFormSubmission}>

          <input style={inputStyle}
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}}/>

          <input style={inputStyle}
              type='text'
              id='brand'
              placeholder='Brand'
              ref={(input) => {_brand = input;}}/>

            <input style={inputStyle}
                type='text'
                id='price'
                placeholder='Price'
                ref={(input) => {_price = input;}}/>

              <input style={inputStyle}
                  type='text'
                  id='abv'
                  placeholder='Abv'
                  ref={(input) => {_abv = input;}}/>

        <button type='submit' style={buttonStyle}>Submit</button>
        </form>
      </div>
    );
  }

  NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
  };

  export default NewKegForm;
