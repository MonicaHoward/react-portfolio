import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="nav row p-4" id="navbar">
        <div className="col-md-6">
          <h3>MONICA HOWARD</h3>
          <p>Full Stack</p>
        </div>
        <div className="col-md-6">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
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
