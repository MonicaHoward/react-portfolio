import React, { Component } from "react";
import "./feature.css";

class Features extends Component {
  render() {
    return (
      <div className="feature-container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active linkStyles" href="/ ">
              CHECK IT OUT!
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">
              Social
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Other
            </a>
          </li> */}
        </ul>
        <div className="row">
          <div className="card-deck">
            <div className="card trans-grad">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card trans-grad">
              <img
                src="https://via.placeholder.com/100x200"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div className="card trans-grad">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
