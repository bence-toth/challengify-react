import { Link } from "@reach/router";
import React from "react";

import { Label } from "../components";

import "./challengeWidget.css";

const ChallengeWidget = ({
  title,
  labels,
  linkTo = "#",
  description,
  markers,
}) => (
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

    <p className="description">{description}</p>

    <div className="markers">
      {markers.map(({ date, value, succeeded }) => (
        <div className="markerContent">
          <div className="markerValue">
            <span>{value}</span>
            <span className={succeeded ? "checkmark" : "uncheck"}>
              {succeeded ? "✔" : "✗"}
            </span>
          </div>
          <span className="markerDate">{date}</span>
        </div>
      ))}
      <button className="currentPeriod">+</button>
    </div>
  </div>
);

export default ChallengeWidget;
