import db from "db/init";

export const createRecord = async ({ challengeId, timestamp, value }) =>
  await db.records.put({
    challengeId,
    timestamp,
    value,
  });
