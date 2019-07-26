import React from "react";
import "./feature.css";

import GithubLogo from "../assets/images/GitHub.png";
import LinkedinLogo from "../assets/images/LinkedIn.png";
import EmailLogo from "../assets/images/Email.png";

const Feature = ({ type, imageSrc, link, msg, children }) => {
  return (
    <div className="card text-center col-md-4 trans-grad">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card-header">{type}</div>
        <div className="card-body">
          <img className="imageSize" src={imageSrc} alt={type} />
        </div>
        <div className="card-footer text-muted">{msg}</div>
      </a>
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
      <div className="row justify-content-center">
        <div className="card-deck">
          <Feature
            type="LINKEDIN"
            link="https://www.linkedin.com/in/monica-howard/"
            imageSrc={LinkedinLogo}
            msg="Let's Connect!"
          />
          <Feature
            type="GITHUB"
            link="https://github.com/MonicaHoward"
            imageSrc={GithubLogo}
            msg="The road to 2 million lines of code"
          />
          <Feature
            type="EMAIL"
            link="mailto:hi@monicahoward.net"
            imageSrc={EmailLogo}
            msg="Holla at me!"
          />
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
