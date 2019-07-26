import React from "react";
import "./feature.css";

import GithubLogo from "../assets/images/GitHub.png";
import LinkedinLogo from "../assets/images/LinkedIn.png";
import EmailLogo from "../assets/images/Email.png";

const Feature = ({ type, imageSrc, msg, children }) => {
  return (
    <div
      className="card text-center col-md-4
    /> trans-grad"
    >
      <div className="card-header">{type}</div>
      <div className="card-body">
        <img className="imageSize" src={imageSrc} alt={type} />
      </div>
      <div className="card-footer text-muted">{msg}</div>
    </div>
  );
};

const Features = () => {
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
      <div class="row justify-content-center">
        <div class="card-deck">
          <Feature
            type="LINKEDIN"
            imageSrc={LinkedinLogo}
            msg="Let's Connect!"
          />
          <Feature
            type="GITHUB"
            imageSrc={GithubLogo}
            msg="131,000 line of code & counting"
          />
          <Feature type="EMAIL" imageSrc={EmailLogo} msg="I said what?" />
        </div>

        {/* <div className="row">
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
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Features;
