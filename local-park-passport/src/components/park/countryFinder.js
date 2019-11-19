import React from "react";

import {
  CountryDropdown,
  RegionDropdown
  // CountryRegionData
} from "react-country-region-selector";

const CountryFinder = props => {
  return (
    <div>
      <CountryDropdown
        value={props.country}
        onChange={val => props.selectCountry(val)}
      />
      <RegionDropdown
        country={props.country}
        value={props.region}
        onChange={val => props.selectRegion(val)}
      />
    </div>
  );
};
export default CountryFinder;
