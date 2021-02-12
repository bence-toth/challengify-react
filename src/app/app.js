import React from "react";
import { Router, Link } from "@reach/router";
import { ChallengesRouter } from "./routes";

const Splash = () => (
  <p path="/">
    <Link to="challenges">Go to /challenges</Link> to see the app
  </p>
);

const App = () => (
  <Router className="fullSize">
    <ChallengesRouter path="challenges/*" />
    <Splash path="/" />
  </Router>
);

export default App;
