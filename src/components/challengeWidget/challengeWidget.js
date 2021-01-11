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
      <div className="markers-content">
        <div className="markerValue">3</div>
        <p className="markerDate">Apr</p>
      </div>

      <div className="markers-content">
        <div className="markerValue">3</div>
        <p className="markerDate">Apr</p>
      </div>

      <div className="markers-content">
        <div className="markerValue">3</div>
        <p className="markerDate">Apr</p>
      </div>

      <div className="markers-content">
        <div className="markerValue">3</div>
        <p className="markerDate">Apr</p>
      </div>

      <div className="markers-content">
        <div className="markerValue">3</div>
        <p className="markerDate">Apr</p>
      </div>
      <button className="currentPeriod">+</button>
    </div>
  </div>
);

export default ChallengeWidget;
