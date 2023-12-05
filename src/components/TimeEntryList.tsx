import * as React from "react";
import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntries: TimeEntry[];
}

const TimeEntryList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <ul>
      {timeEntries.map(({ id, comment }) => (
        <li key={id}>{comment}</li>
      ))}
    </ul>
  );
};

export default TimeEntryList;
