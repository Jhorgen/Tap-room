import React from 'react';
import Keg from './Keg';
import Coors from './CoorsLogo';

var masterKegList = [

  {
    name: 'test Light',
    brand: 'Brand: Coors',
    price: 'Price: $5',
    abv: 'ABV: 5%',
    remainder: 'Remainder: placeholder',
    img: <Coors/>

  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
    remainder: 'Remainder: placeholder'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
    remainder: 'Remainder: placeholder'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
    remainder: 'Remainder: placeholder'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
    remainder: 'Remainder: placeholder'
  },

  {
    name: 'Coors Light',
    brand: 'Coors',
    price: '5',
    abv: '5',
    remainder: 'Remainder: placeholder'
  },
];



function KegList() {
  return (
    <div>
      {masterKegList.map((kegs, index) =>
        <Keg
          img={kegs.img}
          name={kegs.name}
          brand={kegs.brand}
          price={kegs.price}
          abv={kegs.abv}
          remainder={kegs.remainder}
          key={index}
          />
      )}
    </div>
  );
}

export default KegList
