import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({ timeEntry: { comment, start } }: Props) => {
  return (
    <div>
      {start.toLocaleDateString()}: {comment}
    </div>
  );
};

export default TimeEntryView;
