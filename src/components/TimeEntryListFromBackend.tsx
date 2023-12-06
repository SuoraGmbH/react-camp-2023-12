import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import TimeEntryList from "./TimeEntryList.tsx";

const TimeEntryListFromBackend = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTimeEntries(
          data.map((timeEntryResponse: any) => {
            return {
              id: timeEntryResponse.id,
              comment: timeEntryResponse.comment,
              start: new Date(timeEntryResponse.start),
              end: new Date(timeEntryResponse.end),
            };
          }),
        );
      });
  }, []);

  if (!timeEntries) {
    return <div>Loading...</div>;
  }
  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
