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
      <div>
        <Link to={`/`}>
          <button>Home</button>
        </Link>
      </div>
      <div>
        <Link to={`/Login`}>
          <button>Sign in</button>
        </Link>
      </div>
      <div>
        <Link to={`/register`}>
          <button>Sign up</button>
        </Link>
      </div>
    </StyledDiv>
  );
};

export default LandingNav;
