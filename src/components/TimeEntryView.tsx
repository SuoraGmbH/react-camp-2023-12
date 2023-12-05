import TimeEntry from "../domain/TimeEntry.ts";
import WiederholungsKomponente from "./WiederholungsKomponente.tsx";

interface Props {
  timeEntry: TimeEntry;
}

const TimeEntryView = ({ timeEntry: { comment } }: Props) => {
  return (
    <div>
      <WiederholungsKomponente name="Alexander" />
      {comment}
    </div>
  );
};

export default TimeEntryView;
