import React from 'react';
import Keg from './Keg';
import Coors from './CoorsLogo';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

let masterKegList = [];

function KegList(props) {
    return (
      <div>
        {props.masterKegList.map((keg, index) =>
          <Keg
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            remainder={keg.remainder}
            key={index}
            />
        )}
      </div>
    );
  }

KegList.propTypes = {
  masterKegList: PropTypes.array,
  remainder: PropTypes.number
}

export default KegList
