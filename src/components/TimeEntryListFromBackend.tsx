import { useEffect, useState } from "react";
import TimeEntry from "../domain/TimeEntry.ts";
import TimeEntryList from "./TimeEntryList.tsx";
import { z } from "zod";

type TimeEntryBackend = {
  id: string;
  comment: string;
  start: string;
  end: string;
};

const timeEntryBackendResponseSchema = z.array(
  z.object({
    id: z.string(),
    comment: z.string(),
    start: z.string(),
    end: z.string(),
  }),
);

const TimeEntryListFromBackend = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>();

  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((data) => {
        const parsedData = timeEntryBackendResponseSchema.parse(data);

        setTimeEntries(
          parsedData.map((timeEntry) => {
            return {
              ...timeEntry,
              start: new Date(timeEntry.start),
              end: new Date(timeEntry.start),
            };
          }),
        );
        // setTimeEntries(
        //   data.map((timeEntryResponse: TimeEntryBackend) => {
        //     return {
        //       ...timeEntryResponse,
        //       start: new Date(timeEntryResponse.start),
        //       end: new Date(timeEntryResponse.end),
        //     };
        //   }),
        // );
      });
  }, []);

  if (!timeEntries) {
    return <div>Loading...</div>;
  }
  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromBackend;
