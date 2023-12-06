import React, { useState } from "react";
import TimeEntryForm from "./TimeEntryForm.tsx";
import TimeEntryList from "./TimeEntryList.tsx";
import TimeEntry from "../domain/TimeEntry.ts";

const DynamicTimeEntryList: React.FunctionComponent = () => {
  const [timeEntries, setTimeEntries] = useState([
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
  ]);

  const handleTimeEntryAdd = (timeEntry: TimeEntry) => {
    setTimeEntries([...timeEntries, timeEntry]);
  };

  return (
    <div style={{ border: "5px solid pink" }}>
      <TimeEntryForm onTimeEntryAdd={handleTimeEntryAdd} />
      <TimeEntryList timeEntries={timeEntries} />
    </div>
  );
};

export default DynamicTimeEntryList;
