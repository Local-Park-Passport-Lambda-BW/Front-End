import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ParkCard from "./ParkCard";

// Styles
const ParkListCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ParksList = ({ parkList, setParkList }) => {

  useEffect(() => {
    axios
      .get("http://localhost:3300/parks")
      .then(res => setParkList(res.data))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div>
      <h1 className="intro">Welcome to Parks Page.</h1>

      <ParkListCon>
        {parkList.map(park => (
          <ParkCard key={park.id} park={park} />
        ))}
      </ParkListCon>
    </div>
  );
};

export default ParksList;
