import React, { useState } from "react";
import styled from "styled-components";

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
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
