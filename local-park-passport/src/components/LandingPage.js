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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const FooterStyle = styled.footer`
background: rgba(255, 255, 255, 0.5);
width: 100vw;
height: 50px;
display: flex;
align-items: center;
justify-content: center;

  p {
    margin: 0;
  }
`;

const LandingPage = props => {
  return (
    <Container className="bg-image"
      style={{
        background: `url(${landingBackground})`
      }}>
      <Content>
        <HeaderStyle>
          <LandingNav />
        </HeaderStyle>

        <Main />
      </Content>

      <FooterStyle>
        <p>Copyright 2019. Local Park Passport</p>
      </FooterStyle>
    </Container>
  );
};

export default LandingPage;
