import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import LandingNav from "./components/LandingNav";
import GetPark from "./components/GetPark";
import GetToken from "./components/GetToken";

function App() {
  let loggedIn = true;
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    GetToken();
  }, []);

  let routes = (
    <>
      <Route exact path="/" component={Dashboard} />
    </>
  );

  if (!loggedIn) {
    routes = (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />
      </>
    );
  }

  return (
    <div className="App">
      {/* <LandingNav />
      <GetPark /> */}
      {routes}
    </div>
  );
}

export default App;
