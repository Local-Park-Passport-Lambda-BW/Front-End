import React, { Component, useState } from "react";
import styled from "styled-components";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData
} from "react-country-region-selector";
// Styling;
const StyledDiv = styled.div`
  width: 98%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);

  .park-form {
    padding: 30px;
    width: 80%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    .parks-button {
      margin-top: 30px;
      background-color: green;
      border-radius: 5px;
      width: 100px;
      color: white;
    }
    .label {
      background-color: #e9e9e9;
      border-radius: 5px;
    }
  }
`;

export default function ParkForm(props) {
  const [park, setPark] = useState({ title: "", body: "" });

  const handleChanges = e => {
    setPark({ ...park, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewPark(park);
  };

  return (
    <StyledDiv>
      <form onSubmit={submitForm} className="park-form">
        <label htmlFor="name" className="parks-label"></label>
        <input
          className="parks-input label"
          name="name"
          onChange={handleChanges}
          value={park.name}
          placeholder="Park Name"
        />
        <label htmlFor="description" className="parks-label "></label>
        <textarea
          className="parks-textarea label"
          name="description"
          onChange={handleChanges}
          value={park.description}
          placeholder="Description"
        />
        <button className="parks-button">Add Park</button>
      </form>
    </StyledDiv>
  );
}
