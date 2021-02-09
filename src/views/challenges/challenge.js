import React from "react";
import { Link } from "@reach/router";

import { Chrome } from "components/components";

export const Challenge = ({ challengeId }) => (
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

export const DeleteChallenge = ({ challengeId }) => (
  <div>
    <h2>Delete challenge {challengeId}?</h2>
    <Link to="../settings">No, back to challenge</Link>
  </div>
);
