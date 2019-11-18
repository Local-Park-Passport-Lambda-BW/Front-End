import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Navigation from "./components/Navigation";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Park passport</h1>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" render={props => <Register {...props} />} />
    </div>
  );
}

export default App;
