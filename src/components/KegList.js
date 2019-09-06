import React from 'react';
import Keg from './Keg';

var masterKegList = [

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5'
  },
  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5'
  },
];

function KegList() {
  return (
  <div>
    {masterKegList.map((kegs, index) =>
      <KegList name={kegs.name}
        brand={kegs.brand}
        price={kegs.price}
        abv={kegs.abv}
        key={index}/>
    )}
  </div>
);
}

export default KegList
