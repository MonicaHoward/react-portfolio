import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <div
        className="nav row p-4  
      "
        id="navbar"
      >
        <div className="col-md-8 title-trans p-4 ">
          <h3>MONICA HOWARD</h3>
        </div>
        <div className="col-md-4   top-nav-trans p-4 ">
          <ul className="nav d-flex justify-content-between">
            <li className="nav-item  ">
              <a className="nav-link active " href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Portfolio
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                href="/"
                tabindex="-1"
                aria-disabled="false"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
