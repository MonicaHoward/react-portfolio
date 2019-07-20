import React from "react";
import Nav from "./components/Nav.js";
import Jumbotron from "./components/Jumbotron.js";
import Features from "./components/Features.js";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="bg" />
      <div className="content">
        {/* <div className="container"> */}
        <Nav />
        {/* </div> */}
        <Jumbotron />
        <Features />
      </div>
    </div>
  );
}

export default App;
