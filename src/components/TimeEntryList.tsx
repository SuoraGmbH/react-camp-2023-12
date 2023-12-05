import * as React from "react";
import TimeEntry from "../domain/TimeEntry.ts";

const TimeEntryList: React.FunctionComponent = () => {
  const timeEntries: TimeEntry[] = [
    {
      id: "dda4af1b-c542-44eb-a 567-e1989118de40",
      comment: "Hallo Welt",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "cfab7778-beb7-44ae-ae9e-840ff94e6623",
      comment: "Hallo Welt 2",
      start: new Date(),
      end: new Date(),
    },
    {
      id: "cfab7778-beb7-44ae-ae9e-890ff94e6623",
      comment: "Hallo dritter Eintrag",
      start: new Date(),
      end: new Date(),
    },
  ];

  const listItems = timeEntries.map(({ id, comment }) => (
    <li key={id}>{comment}</li>
  ));

  return <ul>{listItems}</ul>;
};

export default TimeEntryList;
