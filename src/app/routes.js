import React from "react";
import { Router } from "@reach/router";
import {
  CreateChallenge,
  EditChallenge,
  Challenges,
  Challenge,
  DeleteChallenge,
  EditRecord,
  DeleteRecord
} from "views";

export const ChallengeRouter = ({ challengeId }) => (
  <Router className="fullSize">
    <EditChallenge path="settings" />
    <DeleteChallenge path="delete" />
    <EditRecord path="records/:recordId/edit" challengeId={challengeId} />
    <DeleteRecord path="records/:recordId/delete" challengeId={challengeId} />
    <Challenge path="./" default challengeId={challengeId} />
  </Router>
);

export const ChallengesRouter = () => (
  <Router className="fullSize">
    <CreateChallenge path="new" />
    <ChallengeRouter path=":challengeId/*" />
    <Challenges path="challenges" default />
  </Router>
);
