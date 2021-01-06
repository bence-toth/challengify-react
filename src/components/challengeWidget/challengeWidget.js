import { Link } from "@reach/router";
import React from "react";

import { Label } from "../components";

import "./challengeWidget.css";

const ChallengeWidget = ({ title, labels, linkTo = "#" }) => (
  <div className="challengeWidget">
    <header>
      <div className="title">
        <Link to={linkTo}>
          <h2>{title}</h2>
        </Link>
        <span className="statusIcon">✔</span>
      </div>
      <div className="labels">
        {labels.map(({ name, color }) => (
          <Label name={name} color={color} />
        ))}
      </div>
    </header>
    <p className="description">
      Read at least two books every month <br></br>
      From 21 January 2021 until 31 December 2021
    </p>
    <div className="markers">
      <div className="marker">
        <span className="markerValue">3</span>
        <span className="markerDate">Apr</span>
      </div>

      <div className="marker">
        <span className="markerValue">3</span>
        <span className="markerDate">May</span>
      </div>

      <div className="marker">
        <span className="markerValue">2</span>
        <span className="markerDate">Jun</span>
      </div>

      <div className="marker">
        <span className="markerValue">0</span>

        <span className="markerDate">Jul</span>
      </div>

      <div className="marker">
        <span className="markerValue">3</span>
        <span className="markerDate">Aug</span>
      </div>

      <button className="currentPeriod">+</button>
    </div>
  </div>
);

export default ChallengeWidget;
