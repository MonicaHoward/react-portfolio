import React from "react";
import Nav from "./components/Nav.js";
import Jumbotron from "./components/Jumbotron.js";

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <Nav />
      </div>
      <Jumbotron />
    </div>
  );
}

export default App;
