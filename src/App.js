import React from "react";
import Nav from "./components/Nav.js";
import Jumbotron from "./components/Jumbotron.js";
import Features from "./components/Features.js";

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Nav />
      </div>
      <Jumbotron />
      <Features />
    </div>
  );
}

export default App;
