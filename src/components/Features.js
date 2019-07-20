import React, { Component } from "react";
import "./feature.css";

class Features extends Component {
  render() {
    return (
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/ ">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Social
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Other
            </a>
          </li>
        </ul>
        <div class="container">
          <div class="card-columns">
            <div class="card trans-grad">
              <div class="card-body">
                <img
                  src="https://image.flaticon.com/icons/svg/87/87396.svg"
                  alt="twitter"
                />
              </div>
            </div>
            {/* <div class="card p-3">
              <blockquote class="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer class="blockquote-footer">
                  <small class="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <img src="/" class="card-img-top" alt="/" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat.
                </p>
                <footer class="blockquote-footer text-white">
                  <small>
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has a regular title and short paragraphy of text
                  below it.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img src="/" class="card-img-top" alt="/" />
            </div>
            <div class="card p-3 text-right">
              <blockquote class="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer class="blockquote-footer">
                  <small class="text-muted">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is another card with title and supporting text below.
                  This card has some additional content to make it slightly
                  taller overall.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
