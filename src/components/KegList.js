import React from 'react';
import Keg from './Keg';
import Coors from './CoorsLogo';
import PropTypes from "prop-types";


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
export default KegList
