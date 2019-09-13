import React from 'react';
import Keg from './Keg';
import Coors from './CoorsLogo';
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



var masterKegList = [

  {
    name: 'test Light',
    brand: 'Brand: Coors',
    price: 'Price: $5',
    abv: 'ABV: 5%',
    img: <Coors/>

  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
  },
];


class KegList extends React.Component {


  static propTypes = {
     remainder: PropTypes.number  ,
  }

  static defaultProps = {
   remainder: 124
}

render() {

  return (
    <div>
      <Link to='/newkeg'>Add New Keg</Link>
        <Link to='/'>Go back</Link>
      {masterKegList.map((kegs, index) =>
        <Keg
          img={kegs.img}
          name={kegs.name}
          brand={kegs.brand}
          price={kegs.price}
          abv={kegs.abv}
          remainder={this.props.remainder}
          key={index}
          />
      )}
    </div>
  );
}
}
KegList.propTypes = {
  remainder: PropTypes.number.isRequired
}

export default KegList
