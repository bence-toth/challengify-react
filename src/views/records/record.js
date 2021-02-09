import React from "react";
import { Link } from "@reach/router";

import { Chrome } from "components/components";

export const EditRecord = ({ challengeId, recordId }) => (
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

export const DeleteRecord = ({ challengeId, recordId }) => (
  <div>
    Delete record {recordId} of challenge {challengeId}?
    <Link to="../edit">No, go back to record</Link>
  </div>
);
