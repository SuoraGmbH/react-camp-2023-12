import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({ timeEntry: { comment } }: Props) => {
  return <div>{comment}</div>;
};

export default TimeEntryView;
