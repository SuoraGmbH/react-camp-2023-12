import TimeEntryView from "./components/TimeEntryView.tsx";
import TimeEntryForm from "./components/TimeEntryForm.tsx";
import WiederholungsKomponente from "./components/WiederholungsKomponente.tsx";
import Counter from "./components/Counter.tsx";
import TimeEntryList from "./components/TimeEntryList.tsx";
import TimeEntry from "./domain/TimeEntry.ts";
import { useState } from "react";

function App() {
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
    <div>
      <TimeEntryList timeEntries={timeEntries} />
      <Counter />
      <TimeEntryForm onTimeEntryAdd={handleTimeEntryAdd} />
      <TimeEntryView
        timeEntry={{
          id: "nsiadijoas",
          comment: "Hallo Welt",
          start: new Date(),
          end: new Date(),
        }}
      />

      <WiederholungsKomponente name="Günther" />
      <WiederholungsKomponente name="André" />
    </div>
  );
}

export default App;
