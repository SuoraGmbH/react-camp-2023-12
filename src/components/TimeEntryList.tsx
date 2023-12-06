import * as React from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import TimeEntryView from "./TimeEntryView.tsx";

interface Props {
  timeEntries: TimeEntry[];
}

const TimeEntryList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <ul>
      {timeEntries.map((timeEntry) => (
        <li key={timeEntry.id}>
          <TimeEntryView timeEntry={timeEntry} />
        </li>
      ))}
    </ul>
  );
};

export default TimeEntryList;
