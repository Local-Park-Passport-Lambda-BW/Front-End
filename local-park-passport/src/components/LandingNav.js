import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 61.8%;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 15px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* a {
    padding: 5px;
  } */
`;

const LandingNav = () => {

  return (
    <StyledDiv>
      <Link to={`/`}>Home</Link>
      <Link to={`/Login`}>Sign in</Link>
      <Link to={`/register`}>Sign up</Link>
    </StyledDiv>
  );
};

export default LandingNav;
