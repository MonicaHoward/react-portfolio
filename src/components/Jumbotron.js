import React from "react";
import "./jumbotron.css";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid dark-trans">
        <div className="container">
          <h1 className="display-5">
            Hi, I'm Monica Howard, a full stack developer.
          </h1>
          <p className="lead">Keep scrolling to check out some of my work.</p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
