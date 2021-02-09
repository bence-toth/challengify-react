import React, { useEffect, useState } from "react";
import { getChallenges } from "db/db";
import { Chrome, ChallengeWidget } from "components/components";

export const Challenges = () => {
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
      {challenges.map(({id, records, title}) => (
        <ChallengeWidget
          key={id}
          linkTo={`${id}`}
          records={records}
          title={title}
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
        />
      ))}
    </Chrome>
  );
};
