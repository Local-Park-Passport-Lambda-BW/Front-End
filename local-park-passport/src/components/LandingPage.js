import React from "react";
import LandingNav from "./LandingNav";
import Main from "./Main";

const LandingPage = props => {
  return (
    <div>
      <div>
        <header>
          <LandingNav />
        </header>

        <Main />
      </div>

      <footer>
        <p>Copyright 2019. Local Park Passport</p>
      </footer>
    </div>
  );
};

export default LandingPage;
