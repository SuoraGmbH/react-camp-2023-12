import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import TimeEntryList from "./TimeEntryList.tsx";
import { z } from "zod";

const timeEntryBackendResponseSchema = z.array(
  z.object({
    id: z.string(),
    comment: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date(),
  }),
);

const TimeEntryListFromBackend = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then(timeEntryBackendResponseSchema.parse)
      .then(setTimeEntries);
  }, []);

  if (!timeEntries) {
    return <div>Loading...</div>;
  }
  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
