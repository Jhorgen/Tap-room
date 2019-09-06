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
    {masterKegList.map((keg, index) =>
      <KegList name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        key={index}/>
    )}
  </div>
);
}

export default KegList
