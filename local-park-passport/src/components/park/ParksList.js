import React from "react";
import styled from "styled-components";

import ParkCard from "./ParkCard";

// Styles
const ParkListCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ParksList = ({ parks }) => {
  return (
    <ParkListCon>
      {parks.map(park => (
        <ParkCard key={park.id} park={park} />
      ))}
    </ParkListCon>
  );
};

export default ParksList;
