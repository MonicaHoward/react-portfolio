import React from "react";
import Nav from "./components/Nav.js";
import Jumbotron from "./components/Jumbotron.js";
import Features from "./components/Features.js";
import "./App.css";

function App() {
  return (
    <div className="container-fluid main">
      <div className="bg" />
      <div className="content">
        <Nav />
        <Jumbotron />
        <div class="container m-8">
          <Features />
        </div>
      </div>
    </div>
  );
}

export default App;
