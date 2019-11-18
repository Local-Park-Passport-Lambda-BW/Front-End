import React from "react";
import styled from "styled-components";

// Styling
const StyledDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  .park {
    margin: 1%;
    padding: 10px;
    width: 48%;
    /* margin-top: 5px; */
    display: flex;

    flex-direction: row;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
    .img-placeholder {
      height: 130px;
      width: 130px;
      border-radius: 5px;
      background-color: grey;
    }
    .top-right-content {
      width: 50%;
      height: 80%;
      margin: 0 auto;
    }
    .bottom-right-content {
      border: 1px red solid;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .stars-placeholder {
        width: 50%;
        margin: 0 auto;
        border: 1px, red, solid;
      }
      .open-closed-placeholder {
        width: 50%;
        margin: 0 auto;
      }
    }

    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.5rem;
    }
  }
`;
export default function ParksList({ parks }) {
  return (
    <StyledDiv className="park-list">
      {parks.map(park => (
        <div className="park" key={park.id}>
          <div className="img-placeholder"></div>

          <div className="top-right-content">
            <div className="body-title">
              <h2>{park.name}</h2>
              {/* <p>{park.id}</p> */}
              <p>{park.description}</p>
              <div className="bottom-right-content">
                <div className="stars-placeholder">*****</div>
                <div className="open-closed-placeholder">open</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledDiv>
  );
}
