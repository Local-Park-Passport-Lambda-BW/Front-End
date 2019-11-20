import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background: white;
  padding: 1em;

  .rightNav {
    left: 0;

    a {
      padding-left: 1em;
    }
  }
`;

const LandingNav = () => {

  return (
    <StyledDiv>
      <Link to={`/`}>Home</Link>
      
      <div className="rightNav">
      <Link to={`/Login`}>Sign in</Link>
      <Link to={`/register`}>Sign up</Link>
      </div>
    </StyledDiv>
  );
};

export default LandingNav;
