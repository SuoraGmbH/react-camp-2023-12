import TimeEntry from "../domain/TimeEntry.ts";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({ timeEntry }: Props) => {
  return <div>{timeEntry.comment}</div>;
};

export default TimeEntryView;
