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
        <div class="row" />
        <div class="card-columns">
          <div class="card trans-grad">
            <img
              src="https://via.placeholder.com/150"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title that wraps to a new line</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="card p-3 trans-grad">
            <blockquote class="blockquote mb-0 card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                <small class="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card trans-grad">
            <img
              src="https://via.placeholder.com/728x190"
              class="card-img-top"
              alt="..."
            />
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
          <div class="card text-white text-center p-3 trans-grad">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer class="blockquote-footer text-white">
                <small>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card text-center trans-grad">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This card has a regular title and short paragraphy of text below
                it.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card trans-grad">
            <img
              src="https://via.placeholder.com/90x728"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card p-3 text-right trans-grad">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                <small class="text-muted">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <div class="card trans-grad">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is another card with title and supporting text below. This
                card has some additional content to make it slightly taller
                overall.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
