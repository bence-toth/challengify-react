import React from "react";
import { Router } from "@reach/router";
import { CreateChallenge, EditChallenge } from "views/views";
import { Challenges } from 'views/challenges/challenges';
import { Challenge, DeleteChallenge } from 'views/challenges/challenge';
import { EditRecord, DeleteRecord } from 'views/records/record';

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
