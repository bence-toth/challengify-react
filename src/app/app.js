import React, { useEffect, useState } from "react";
import { Router, Link } from "@reach/router";

import { CreateChallenge, EditChallenge } from "views/views";
import { Chrome, ChallengeWidget } from "components/components";
import { getChallenges } from "db/db";

const EditRecord = ({ challengeId, recordId }) => (
  <Chrome
    title={`Edit record ${recordId} of challenge ${challengeId}`}
    links={{
      left: {
        to: "../../..",
        text: "Back",
      },
    }}
  >
    <Link to="../delete">Delete</Link>
  </Chrome>
);

const DeleteRecord = ({ challengeId, recordId }) => (
  <div>
    Delete record {recordId} of challenge {challengeId}?
    <Link to="../edit">No, go back to record</Link>
  </div>
);

const DeleteChallenge = ({ challengeId }) => (
  <div>
    <h2>Delete challenge {challengeId}?</h2>
    <Link to="../settings">No, back to challenge</Link>
  </div>
);

const Challenge = ({ challengeId }) => (
  <Chrome
    title={`Challenge ${challengeId}`}
    links={{
      left: {
        to: "..",
        text: "Back",
      },
      right: {
        to: "settings",
        text: "Edit",
      },
    }}
  >
    <h3>Record 1</h3>
    <Link to="records/1/edit">Edit</Link>

    <h3>Record 2</h3>
    <Link to="records/2/edit">Edit</Link>

    <h3>Record 3</h3>
    <Link to="records/3/edit">Edit</Link>
  </Chrome>
);

const ChallengeRouter = ({ challengeId }) => (
  <Router className="fullSize">
    <EditChallenge path="settings" />
    <DeleteChallenge path="delete" />
    <EditRecord path="records/:recordId/edit" challengeId={challengeId} />
    <DeleteRecord path="records/:recordId/delete" challengeId={challengeId} />
    <Challenge path="./" default challengeId={challengeId} />
  </Router>
);

const Challenges = () => {
  const [challenges, onSetChallenges] = useState([]);
  useEffect(() => {
    (async () => {
      onSetChallenges(await getChallenges());
    })();
  }, []);
  return (
    <Chrome
      title="Challenges"
      links={{
        right: {
          to: "new",
          text: "New",
        },
      }}
    >
      {challenges.map((challenge) => (
        <ChallengeWidget
          key={challenge.id}
          linkTo={`${challenge.id}`}
          title={challenge.title}
          labels={[
            {
              name: "Learning",
              color: "#ccfffe",
            },
            {
              name: "NY Resolutions",
              color: "#feffcb",
            },
          ]}
          description="Read at least two books every month from 21 January 2021 until 31 December 2021"
          markers={[
            {
              value: 3,
              date: "Mar",
              succeeded: true,
            },
            {
              value: 0,
              date: "Apr",
              succeeded: true,
            },
            {
              value: 6,
              date: "May",
              succeeded: true,
            },
            {
              value: 5,
              date: "Jun",
              succeeded: false,
            },
            {
              value: 2,
              date: "Jul",
              succeeded: false,
            },
            {
              value: 11,
              date: "Aug",
              succeeded: false,
            },
          ]}
        />
      ))}
    </Chrome>
  );
};

const ChallengesRouter = () => (
  <Router className="fullSize">
    <CreateChallenge path="new" />
    <ChallengeRouter path=":challengeId/*" />
    <Challenges path="challenges" default />
  </Router>
);

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
