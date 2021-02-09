import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { Chrome, Button } from "components/components";
import { createRecord } from 'db/records';

export const Challenge = ({ challengeId, location: {state} }) => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const {records} = state;
    records && setRecords(records);
  }, [state]);
  return (
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
      <Button
        onClick={async () => {
          const record = {
            challengeId,
            timestamp: new Date().getTime(),
            value: 1
          };
          await createRecord(record)
            .then(id => {
              setRecords([
                ...records,
                { ...record, id }
              ]);
            });
        }}
      >
        Add new record with value 1
      </Button>
      {records.map(({id, value}) => (
        <div key={id}>
          <h3>Record value: {value}</h3>
          <Link to={`records/${id}/edit`}>Edit</Link>
        </div>
      ))}
    </Chrome>
  )
};

export const DeleteChallenge = ({ challengeId }) => (
  <div>
    <h2>Delete challenge {challengeId}?</h2>
    <Link to="../settings">No, back to challenge</Link>
  </div>
);
