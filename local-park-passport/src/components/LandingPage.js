import React from "react";
import LandingNav from "./LandingNav";
import Main from "./Main";
import landingBackground from '../images/landscape.jpg'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  /* z-index:9999;
  filter: blur(0px);
  -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px); */
`;

const LandingPage = props => {
  return (
    <div className="bg-image"
      style={{
        background: `url(${landingBackground})`
      }}>
      <div>
        <HeaderStyle>
          <LandingNav />
        </HeaderStyle>

        <Main />
      </div>

      <footer>
        <p>Copyright 2019. Local Park Passport</p>
      </footer>
    </div>
  );
};

export default LandingPage;
